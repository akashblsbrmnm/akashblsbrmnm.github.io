// Get Preact and HTM from global window object
const { h, render } = preact;
const { useState, useEffect } = preactHooks;

// Bind HTM to Preact's h function
const html = htm.bind(h);

function ContactForm() {
    // Check localStorage to see if they already submitted before
    const [status, setStatus] = useState(() => localStorage.getItem('formSubmitted') ? "success" : "");
    const [result, setResult] = useState(() => localStorage.getItem('formSubmitted') ? "Thank you for messaging! I'll get back to you soon :)" : "");

    useEffect(() => {
        lucide.createIcons();
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");
        setResult("Sending....");
        
        const formData = new FormData(event.target);
        // User will replace this string below
        formData.append("access_key", "c32b4dd4-8a76-4c3b-a55b-b8ce15f7cfaf");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            // We await the response but ignore failures to always show success to the user
            await response.json();
        } catch (error) {
            console.log("Form submission error hidden from user:", error);
        } finally {
            // Always display a success message to the user, regardless of backend result
            setResult("Thank you for messaging! I'll get back to you soon :)");
            setStatus("success");
            localStorage.setItem('formSubmitted', 'true');
            event.target.reset();
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
                    <button type="submit" class="terminal-btn active form-submit-btn" disabled=${status === 'sending' || status === 'success'}>
                        <span>${status === 'sending' ? 'Submitting...' : (status === 'success' ? "Thank you for messaging! I'll get back to you soon :)" : 'Submit')}</span>
                    </button>
                </form>
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
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    const toggleTheme = () => {
        setTheme(t => t === 'dark' ? 'light' : 'dark');
    };

    // Run Lucide icons after every render to ensure they aren't lost
    useEffect(() => {
        lucide.createIcons();
    });

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
                            : html`<i data-lucide=${skill.icon} class="skill-icon"></i>`}
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
                                    : html`<i data-lucide=${skill.icon} class="skill-icon"></i>`}
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
            <i data-lucide=${theme === 'dark' ? 'sun' : 'moon'}></i>
        </button>

        <main class="container">
            <section class="hero-terminal reveal">
                <div class="terminal-line font-mono"><span class="prompt">$</span> whoami</div>
                
                <h1 class="terminal-title">Akash<br/><span class="terminal-accent-text">Balasubramaniyam</span></h1>

                <div class="terminal-line font-mono">
                    <span class="prompt">></span> <span class="typewriter">Embedded Linux Developer</span>
                </div>
                
                <div class="terminal-block">
                    <div class="terminal-comment">// Currently works @ <a href="https://in.linkedin.com/company/tataelxsi" target="_blank" class="tata-link">Tata Elxsi</a></div>
                    <p class="terminal-text">C/C++, prplMesh, RDK-B, Wi-Fi, Routers & Gateways, Linux</p>
                </div>

                <div class="terminal-actions-wrapper">
                    <div class="terminal-actions-primary">
                        <a href="/resume" class="terminal-btn active">
                            <i data-lucide="file-text"></i> Resume
                        </a>
                        <a href="#contact" class="terminal-btn">
                            <i data-lucide="mail"></i> Email Me
                        </a>
                    </div>
                    <div class="terminal-actions-social">
                        <a href="https://github.com/akashblsbrmnm/" class="terminal-btn-icon" aria-label="GitHub">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" class="social-icon-img" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/akash-balasubhramanyam/" class="terminal-btn-icon" aria-label="LinkedIn">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg" class="social-icon-img" alt="LinkedIn" />
                        </a>
                        <a href="https://x.com/akashblsbrmnm" class="terminal-btn-icon" aria-label="X">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg" class="social-icon-img" alt="X" />
                        </a>
                        <a href="https://medium.com/@akashblsbrmnm" class="terminal-btn-icon" aria-label="Medium">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/medium.svg" class="social-icon-img" alt="Medium" />
                        </a>
                        <a href="https://instagram.com/akashblsbrmnm" class="terminal-btn-icon" aria-label="Instagram">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg" class="social-icon-img" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" class="reveal">
                <h2>About Me</h2>
                <div class="glass-card">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="./assets/profile.jpg" alt="Akash" class="about-avatar" />
                    </div>
                    <p>Hi there! 👋 I'm a C Developer from India with 2+ years of experience in feature development and system enhancement for <strong>RDK-B</strong> platforms.</p>
                    <p>I'm proficient in Bash scripting and autotools, streamlining the build process for efficient development workflows. I specialize in integrating and enhancing features for robust, high-performance systems.</p>
                    <p>Beyond coding, I'm passionate about photography, graphic design, and modern arts. When I'm not tinkering with systems, you'll find me exploring movies and science fiction.</p>
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

            <section id="projects" class="reveal">
                <h2>Selected Projects</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-role">HLS-Client</div>
                        <div class="timeline-company">Multimedia Framework</div>
                        <p>Implements HTTP-Live Streaming Protocol server and player in the client device, using gstreamer multimedia framework.</p>
                        <a href="https://github.com/akashblsbrmnm/hlsclient" class="terminal-btn" style="margin-top: 12px;">
                            <i data-lucide="external-link"></i> View Project
                        </a>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-role">Skin Cancer Classification</div>
                        <div class="timeline-company">Deep Learning</div>
                        <p>AI/ML Coursework project at the University focusing on image classification using deep neural networks.</p>
                        <a href="https://github.com/akashblsbrmnm/skin-cancer-classifier" class="terminal-btn" style="margin-top: 12px;">
                            <i data-lucide="external-link"></i> View Project
                        </a>
                    </div>
                </div>
            </section>
            
            <${ContactForm} />

        </main>

        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-left">
                    <div class="footer-profile">
                        <img src="./assets/profile.jpg" alt="Akash" class="footer-avatar" />
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
                            <a href="#projects">Projects</a>
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
                            <a href="https://www.linkedin.com/in/akash-balasubhramanyam/" class="footer-social-btn" aria-label="LinkedIn">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg" class="social-icon-img" alt="LinkedIn" />
                            </a>
                            <a href="https://x.com/akashblsbrmnm" class="footer-social-btn" aria-label="X">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg" class="social-icon-img" alt="X" />
                            </a>
                            <a href="https://medium.com/@akashblsbrmnm" class="footer-social-btn" aria-label="Medium">
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/medium.svg" class="social-icon-img" alt="Medium" />
                            </a>
                            <a href="mailto:akashblsbrmnm@gmail.com" class="footer-social-btn" aria-label="Email">
                                <i data-lucide="mail"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

render(html`<${App} />`, document.getElementById('app'));
