+++
title = "prplMesh DPP onboarding on carrier gateways"
slug = "prplmesh-dpp-onboarding"
date = "2026-03-15"
lastmod = "2026-03-15"
author = "Akash"
excerpt = "How Device Provisioning Protocol fits into prplMesh bring-up, from QR/bootstrap material to a mesh agent that actually joins the network."
tags = ["prplmesh", "wifi", "embedded", "networking"]
category = "systems"
draft = false
+++

Device Provisioning Protocol (DPP) is one of those features that looks straightforward in a slide deck and only reveals its edge cases once you are flashing a production CPE image. On prplMesh-based gateways, DPP onboarding is the path from an unconfigured radio to a mesh agent that can be managed, steered, and updated in the field.

## What DPP is doing in the stack

DPP replaces the worst parts of manual WPA configuration for mesh nodes. Instead of typing PSKs on a controller UI, you bootstrap credentials out-of-band - typically a URI, QR code, or NFC payload - and let the supplicant and agent negotiate the rest.

In a prplMesh deployment, the interesting work sits at the boundary between:

- **Host-side Wi-Fi** - wpa_supplicant / hostapd DPP state machines
- **Mesh control plane** - Beerocks agent and controller messaging
- **Platform integration** - UCI or vendor HAL hooks, persistent storage, and factory reset behaviour

If any one of those layers treats DPP as “just another join method,” you get agents that provision locally but never show up in the controller topology.

## A practical onboarding sequence

1. **Generate bootstrap material** on the controller or a provisioning tool. Store the public components where the agent can read them during manufacturing or first boot.
2. **Listen for DPP authentication** on the agent radio. On embedded targets this often means confirming the correct interface is up before the state machine starts - starting DPP on the wrong VIF is a common bring-up mistake.
3. **Exchange Config Objects** and translate the resulting credentials into what prplMesh expects for backhaul and fronthaul roles.
4. **Confirm agent registration** with the controller. Provisioning success in wpa_supplicant logs is necessary but not sufficient; verify the agent appears in the topology map.
5. **Persist and survive reboot.** Factory reset must wipe DPP state cleanly; a partial wipe leaves “zombie” credentials that fail silently on the next onboarding attempt.

```sh
# Quick sanity check after a DPP session
wpa_cli -i wlan0 status | grep -E 'wpa_state|ssid|key_mgmt'
```

## Where things usually break

**Timing.** DPP on a cold boot races with interface creation, regulatory domain setup, and sometimes Ethernet backhaul. If the agent starts DPP before the radio is ready, the user sees a timeout with no obvious cause.

**Role confusion.** Mesh backhaul and fronthaul credentials are not interchangeable. An agent that joins with the wrong profile may associate but never pass traffic.

**Reset semantics.** Carrier gateways need a predictable factory reset story. DPP bootstrap data, cached config objects, and mesh database entries must be cleared together.

## What “done” looks like

A solid DPP onboarding path on prplMesh is boring in the best way: scan a QR code, wait under a minute, see the node in the controller, reboot the CPE, and it comes back without manual intervention. That is the bar for carrier-grade mesh - not just association, but repeatable provisioning under real factory and field constraints.
