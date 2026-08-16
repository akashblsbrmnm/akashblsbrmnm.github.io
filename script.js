// Get Preact and HTM from global window object
const { h, render } = preact;
const { useState, useEffect, useRef } = preactHooks;

// Bind HTM to Preact's h function
const html = htm.bind(h);

function LucideIcon({ name, class: className = '' }) {
    const iconRef = useRef(null);

    useEffect(() => {
        if (iconRef.current) {
            // Give Lucide a fresh unmanaged <i> tag to replace on every render
            iconRef.current.innerHTML = `<i data-lucide="${name}" class="${className}"></i>`;
            lucide.createIcons({ root: iconRef.current });
        }
    }, [name, className]);

    return html`<span ref=${iconRef} style="display: inline-flex; align-items: center; justify-content: center;"></span>`;
}

function ContactForm() {
    const getSubmissionData = () => {
        let data = { count: 0, time: 0 };
        try {
            const stored = localStorage.getItem('formSubmissions');
            if (stored) data = JSON.parse(stored);
        } catch (e) { }

        const twoHours = 2 * 60 * 60 * 1000;
        if (data.time && (Date.now() - data.time > twoHours)) {
            data = { count: 0, time: 0 };
            localStorage.removeItem('formSubmissions');
        }
        return data;
    };

    const [submissionData, setSubmissionData] = useState(() => getSubmissionData());
    const [status, setStatus] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (submissionData.count >= 2 || status === 'sending') return;

        setStatus("sending");

        const formData = new FormData(event.target);
        formData.append("access_key", "c32b4dd4-8a76-4c3b-a55b-b8ce15f7cfaf");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            await response.json();
        } catch (error) {
            console.log("Form submission error hidden from user:", error);
        } finally {
            const newData = {
                count: submissionData.count + 1,
                time: submissionData.time || Date.now()
            };
            setSubmissionData(newData);
            localStorage.setItem('formSubmissions', JSON.stringify(newData));
            setStatus("success");
            event.target.reset();

            // If they still have messages left, reset the button after 4 seconds so they can use it
            if (newData.count < 2) {
                setTimeout(() => {
                    setStatus("");
                }, 4000);
            }
        }
    };

    return html`
        <section id="contact" class="reveal">
            <div class="contact-header">
                <h2 class="contact-title">Let's connect!</h2>
                <p class="contact-subtitle">I'm always open to discussing system architecture challenges, open-source collaborations, and innovative networking projects. Feel free to drop a message!</p>
            </div>
            <div class="glass-card contact-card">
                <form onSubmit=${onSubmit} class="contact-form">
                    <!-- Invisible Honeypot for spam protection -->
                    <input type="checkbox" name="botcheck" id="" style="display: none;" />

                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name <span style="color: #ff5f56; font-weight: bold;">*</span></label>
                            <input type="text" id="name" name="name" required class="form-control" placeholder="John Doe" maxlength="50" />
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail <span style="color: #ff5f56; font-weight: bold;">*</span></label>
                            <input type="email" id="email" name="email" required class="form-control" placeholder="john@example.com" maxlength="100" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required class="form-control" rows="5" placeholder="Hello Akash, ..." maxlength="1000"></textarea>
                    </div>

                    <button type="submit" class="terminal-btn active form-submit-btn" disabled=${status === 'sending' || status === 'success' || submissionData.count >= 2}>
                        <span>${status === 'sending' ? 'Submitting...' : (status === 'success' ? "Thank you for messaging! I'll get back to you soon :)" : (submissionData.count >= 2 ? 'Limit Reached' : 'Submit'))}</span>
                    </button>
                    <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 12px;">
                        ${submissionData.count >= 2 ? "You've reached the message limit. Please try again later." : `${2 - submissionData.count} message${2 - submissionData.count === 1 ? '' : 's'} remaining per session.`}
                    </p>
                </form>
            </div>
        </section>
    `;
}

function LinksSection() {
    const links = [
        { name: "GitHub", url: "https://github.com/akashblsbrmnm", icon: "github" },
        { name: "GitLab", url: "https://gitlab.com/akash_balasubramaniyam", icon: "gitlab" },
        { name: "X (Twitter)", url: "https://x.com/akashblsbrmnm", icon: "x" },
        { name: "Medium", url: "https://medium.com/@akashblsbrmnm", icon: "medium" },
        { name: "Substack", url: "https://akashblsbrmnm.substack.com", icon: "substack" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/akashblsbrmnm/", icon: "linkedin" },
        { name: "HackerRank", url: "https://www.hackerrank.com/profile/akashblsbrmnm", icon: "hackerrank" },
        { name: "LeetCode", url: "https://leetcode.com/u/akashblsbrmnmX", icon: "leetcode" },
        { name: "Instagram", url: "https://instagram.com/akashblsbrmnm", icon: "instagram" }
    ];

    return html`
        <section id="links" class="reveal">
            <h2 class="section-title">Links</h2>
            <div class="links-grid">
                ${links.map(link => html`
                    <a href=${link.url} target="_blank" rel="noopener noreferrer" class="link-card glass-card">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${link.icon}.svg" class="link-card-icon" alt=${link.name} />
                        <span class="link-card-name">${link.name}</span>
                        <${LucideIcon} name="external-link" class="link-card-arrow" />
                    </a>
                `)}
            </div>
        </section>
    `;
}

function App() {
    // Theme state
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Initialize Lenis Smooth Scroll
    useEffect(() => {
        const lenis = new window.Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        });

        // Handle anchor links for smooth scrolling via Lenis
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                lenis.scrollTo(href, { duration: 1.5 }); // slightly slower for dramatic effect
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
            lenis.destroy();
        };
    }, []);

    const toggleTheme = () => {
        setTheme(t => t === 'dark' ? 'light' : 'dark');
    };

    // Scroll Observer hook
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
            // Immediately reveal if in viewport on load
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });

        return () => observer.disconnect();
    }, []);

    const skillsData = [
        { type: 'simple', icon: 'c', name: 'C' },
        { type: 'simple', icon: 'cplusplus', name: 'C++' },
        { type: 'simple', icon: 'gnubash', name: 'Bash' },
        { type: 'simple', icon: 'linux', name: 'Linux' },
        { type: 'simple', icon: 'cmake', name: 'CMake' },
        { type: 'simple', icon: 'python', name: 'Python' },
        { type: 'lucide', icon: 'wifi', name: 'Wi-Fi' },
        { type: 'lucide', icon: 'network', name: 'Networking' },
        { type: 'lucide', icon: 'cpu', name: 'prplMesh' },
        { type: 'lucide', icon: 'server', name: 'RDK-B' },
        { type: 'lucide', icon: 'layers', name: 'Yocto' },
        { type: 'lucide', icon: 'test-tube', name: 'GTest' },
        { type: 'simple', icon: 'jira', name: 'Jira' },
        { type: 'simple', icon: 'jenkins', name: 'Jenkins' },
        { type: 'simple', icon: 'confluence', name: 'Confluence' }
    ];

    /* 
    // ==========================================
    // ALTERNATIVE PILL DESIGN (Keep Handy)
    // ==========================================
    const renderPillSkills = () => html`
        <section class="reveal">
            <h2>Things I Build With</h2>
            <div class="skills-pills">
                ${skillsData.map(skill => html`
                    <div class="skill-pill">
                        ${skill.type === 'simple' 
                            ? html`<img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${skill.icon}.svg" alt=${skill.name} class="skill-icon" />` 
                            : html`<${LucideIcon} name=${skill.icon} class="skill-icon" />`}
                        <span>${skill.name}</span>
                    </div>
                `)}
            </div>
        </section>
    `;
    */

    const renderTerminalSkills = () => html`
        <section class="reveal">
            <h2>Skills</h2>
            <div class="terminal-window">
                <div class="terminal-header">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                </div>
                <div class="terminal-body font-mono">
                    <div class="terminal-command">
                        <span class="prompt">$</span> ls -l skills/
                    </div>
                    <div class="terminal-output">
                        ${skillsData.map(skill => html`
                            <div class="terminal-file">
                                ${skill.type === 'simple'
            ? html`<img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${skill.icon}.svg" alt=${skill.name} class="skill-icon" />`
            : html`<${LucideIcon} name=${skill.icon} class="skill-icon" />`}
                                <span>${skill.name}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </section>
    `;

    return html`
        <button class="theme-toggle" onClick=${toggleTheme} aria-label="Toggle dark mode">
            <${LucideIcon} name=${theme === 'dark' ? 'sun' : 'moon'} />
        </button>

        <main class="container">
            <section class="hero-terminal reveal">
                <div class="terminal-line font-mono"><span class="prompt">$</span> whoami</div>
                
                <h1 class="terminal-title">Akash<br/><span class="terminal-accent-text">Balasubramaniyam</span></h1>

                <div class="terminal-line font-mono">
                    <span class="prompt">></span> <span class="typewriter">Embedded Linux Developer</span>
                </div>
                
                <div class="terminal-block">
                    <div class="terminal-comment">
                        <span>Senior Engineer at</span>
                        <a href="https://in.linkedin.com/company/tataelxsi" target="_blank" class="tata-link"><img src="./assets/tata-elxsi.svg" alt="Tata Elxsi" class="tata-logo" width="103" height="18" /></a>
                    </div>
                    <p class="terminal-text">C/C++, prplMesh, RDK-B, Wi-Fi, Routers & Gateways, Linux</p>
                </div>

                <div class="terminal-actions-wrapper">
                    <div class="terminal-actions-primary">
                        <a href="https://drive.google.com/file/d/1WMK23RWA-sSLJ6pu8h7EdwePOA19Tk5m/view?usp=sharing" target="_blank" class="terminal-btn active">
                            <${LucideIcon} name="file-text" /> Resume
                        </a>
                        <a href="#contact" class="terminal-btn">
                            <${LucideIcon} name="mail" /> Email Me
                        </a>
                    </div>
                    <div class="terminal-actions-social">
                        <a href="https://github.com/akashblsbrmnm/" target="_blank" class="terminal-btn-icon" aria-label="GitHub">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" class="social-icon-img" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/akashblsbrmnm/" target="_blank" class="terminal-btn-icon" aria-label="LinkedIn">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg" class="social-icon-img" alt="LinkedIn" />
                        </a>
                        <a href="https://x.com/akashblsbrmnm" target="_blank" class="terminal-btn-icon" aria-label="X">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg" class="social-icon-img" alt="X" />
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" class="reveal">
                <h2 class="section-title">About Me</h2>
                <div class="glass-card about-card">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="./assets/profile-small.webp" alt="Akash" class="about-avatar" width="120" height="120" fetchpriority="high" />
                    </div>
                    <div class="about-content">
                        <p class="font-sans about-text" style="margin-bottom: 12px;">
                            I'm a Senior Engineer passionate about embedded Linux, networking, and broadband technologies. Currently, I work on prplOS and prplMesh, developing Wi-Fi 7 features, Device Provisioning Protocol (DPP) onboarding, and next-generation connectivity solutions for carrier-grade broadband gateways. My work focuses on building reliable, high-performance networking software in C/C++ on Linux, with an emphasis on system-level development and wireless technologies.
                        </p>
                        <p class="font-sans about-text">
                            Building on four years of industry experience, my background includes extensive work developing and integrating networking and middleware components for RDK-B based broadband gateways. I am highly proficient with C/C++, Yocto, Linux, and protocols such as TCP/IP, DHCP, TR-069, USP, and WebPA. I enjoy tackling complex engineering challenges, optimizing system performance, and building software that powers millions of connected devices.
                        </p>
                    </div>
                </div>
            </section>

            ${renderTerminalSkills()}

            <section class="reveal">
                <h2>Experience</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-role">Senior Engineer</div>
                        <div class="timeline-company">Tata Elxsi</div>
                        <div class="timeline-date font-mono" style="color: var(--text-secondary); margin-bottom: 8px;">March 2026 - Present</div>
                        <p>Involved in Wi-Fi stack development and integration for next-generation platforms utilizing prplOS, prplMesh, and hostap.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-role">Technology Analyst</div>
                        <div class="timeline-company">Infosys</div>
                        <div class="timeline-date font-mono" style="color: var(--text-secondary); margin-bottom: 8px;">Oct 2022 - March 2026</div>
                        <p>Developed networking and remote provisioning features for RDK-B carrier-grade broadband gateways using C/C++ on Linux. Implemented dynamic IPC (rbus), customized Yocto/Bitbake builds, and managed CI/CD with Docker. Ensured system stability via GTest, GDB, and Valgrind debugging.</p>
                        <div class="timeline-skills font-mono" style="margin-top: 12px; font-size: 0.85rem; color: var(--text-secondary);">
                            Skills: RDK-B, C/C++, Yocto, BitBake, RBUS, TR-181, Docker
                        </div>
                    </div>
                </div>
            </section>

            <!-- <section id="projects" class="reveal">
                <h2>Selected Projects</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-role">HLS-Client</div>
                        <div class="timeline-company">Multimedia Framework</div>
                        <p>Implements HTTP-Live Streaming Protocol server and player in the client device, using gstreamer multimedia framework.</p>
                        <a href="https://github.com/akashblsbrmnm/hlsclient" class="terminal-btn" style="margin-top: 12px;">
                            <${LucideIcon} name="external-link" /> View Project
                        </a>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-role">Skin Cancer Classification</div>
                        <div class="timeline-company">Deep Learning</div>
                        <p>AI/ML Coursework project at the University focusing on image classification using deep neural networks.</p>
                        <a href="https://github.com/akashblsbrmnm/skin-cancer-classifier" class="terminal-btn" style="margin-top: 12px;">
                            <${LucideIcon} name="external-link" /> View Project
                        </a>
                    </div>
                </div>
            </section> -->
            
            <${ContactForm} />
            <${LinksSection} />

        </main>

        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-left">
                    <div class="footer-profile">
                        <img src="./assets/profile-small.webp" alt="Akash" class="footer-avatar" width="48" height="48" loading="lazy" />
                        <div class="footer-profile-text">
                            <div class="footer-name">Akash.</div>
                            <div class="footer-subtitle">Embedded Linux Developer</div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <p>© 2026 Akash Balasubramaniyam. All Rights Reserved.</p>
                        <p>Learning, building, and contributing one commit at a time.</p>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="footer-group">
                        <div class="footer-heading">NAVIGATE</div>
                        <div class="footer-links">
                            <a href="#">Home</a>
                            <a href="#about">About</a>
                            <!-- <a href="#projects">Projects</a> -->
                            <a href="#contact">Contact</a>
                            <a href="https://github.com/akashblsbrmnm/">GitHub</a>
                        </div>
                    </div>
                    <div class="footer-group">
                        <div class="footer-heading">CONNECT</div>
                        <div class="footer-socials">
                            <a href="https://github.com/akashblsbrmnm" class="footer-social-btn" aria-label="GitHub">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" class="social-icon-img" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/akashblsbrmnm/" class="footer-social-btn" aria-label="LinkedIn">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg" class="social-icon-img" alt="LinkedIn" />
                            </a>
                            <a href="https://x.com/akashblsbrmnm" class="footer-social-btn" aria-label="X">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg" class="social-icon-img" alt="X" />
                            </a>
                            <a href="https://medium.com/@akashblsbrmnm" class="footer-social-btn" aria-label="Medium">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/medium.svg" class="social-icon-img" alt="Medium" />
                            </a>
                            <a href="mailto:akashblsbrmnm@gmail.com" class="footer-social-btn" aria-label="Email">
                                <${LucideIcon} name="mail" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

render(html`<${App} />`, document.getElementById('app'));
