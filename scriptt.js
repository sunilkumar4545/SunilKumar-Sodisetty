
// SEO and Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Update page title dynamically based on section
    function updatePageTitle(section) {
        const titles = {
            'home': 'Sunil Kumar - Full Stack Developer | Electronics & Communication Engineer',
            'tools': 'Development Tools & Technologies - Sunil Kumar Portfolio',
            'experience': 'Professional Experience & Education - Sunil Kumar',
            'portfolio': 'Web Development Projects - Sunil Kumar Portfolio',
            'research': 'Electronics Research & MIMO Antenna Projects - Sunil Kumar',
            'blog': 'Technical Blog & Programming Tutorials - Sunil Kumar',
            'contact': 'Contact Full Stack Developer - Sunil Kumar'
        };
        
        if (titles[section]) {
            document.title = titles[section];
            
            // Update meta description dynamically
            const metaDesc = document.querySelector('meta[name="description"]');
            const descriptions = {
                'home': 'Sunil Kumar - Experienced Full Stack Developer and Electronics & Communication Engineer specializing in Node.js, Express.js, MongoDB, React.js, and antenna research.',
                'tools': 'Explore the development tools and technologies used by Sunil Kumar including MERN stack, Python, Java, and modern web development frameworks.',
                'experience': 'Professional experience and educational background of Sunil Kumar in Electronics & Communication Engineering and Full Stack Development.',
                'portfolio': 'Featured web development projects by Sunil Kumar including React applications, Node.js backends, and responsive websites.',
                'research': 'Electronics research projects including MIMO antenna design, ultra-wide-band technology, and wireless communication by Sunil Kumar.',
                'blog': 'Technical blog featuring web development tutorials, programming insights, and technology articles by Sunil Kumar.',
                'contact': 'Contact Sunil Kumar for web development projects, MERN stack development, and Electronics engineering collaboration.'
            };
            
            if (metaDesc && descriptions[section]) {
                metaDesc.content = descriptions[section];
            }
        }
    }
    
    // Track page sections for analytics
    function trackSection(sectionName) {
        // Add Google Analytics tracking if implemented
        if (typeof gtag !== 'undefined') {
            gtag('event', 'section_view', {
                'section_name': sectionName,
                'page_title': document.title
            });
        }
    }
    
    // Add structured data for projects
    function addProjectStructuredData() {
        const projects = document.querySelectorAll('.project-card');
        projects.forEach((project, index) => {
            const title = project.querySelector('h3')?.textContent;
            const description = project.querySelector('p')?.textContent;
            
            if (title) {
                project.setAttribute('itemscope', '');
                project.setAttribute('itemtype', 'https://schema.org/CreativeWork');
                
                const titleElement = project.querySelector('h3');
                if (titleElement) {
                    titleElement.setAttribute('itemprop', 'name');
                }
                
                const descElement = project.querySelector('p');
                if (descElement) {
                    descElement.setAttribute('itemprop', 'description');
                }
            }
        });
    }
    
    // Initialize SEO optimizations
    addProjectStructuredData();
});

// Timeline data
const timelineData = {
    education: [
        {
            id: "education-1",
            date: "2022 - 2025",
            title: "B.Tech - Electronics and Communication Engineering",
            description: "Pace Institute of Technology and Sciences, Ongole, Andhra Pradesh. CGPA - 8.38",
            location: "Ongole, Andhra Pradesh"
        },
        {
            id: "education-2",
            date: "2019 - 2022",
            title: "Diploma in Electronics and Communication Engineering",
            description: "Government Polytechnic, addanki, Andhra Pradesh. Percentage - 76.02",
            location: "Andhra Pradesh"
        },
        {
            id: "education-3",
            date: "2018-2019",
            title: "Board of Secondary Education",
            description: "Apex High School (SSC), Andhra Pradesh. GPA - 9.5",
            location: "Andhra Pradesh"
        }
    ],
    internship: [
        {
            id: "internship-1",
            date: "2024",
            title: "Web Development Intern",
            description: "CodeTantra - Developed and deployed responsive websites using HTML, CSS, JS; hosted via Netlify."
        },
        {
            id: "internship-2",
            date: "2025",
            title: "Java Developer Intern",
            description: "42 Learn - Built Java apps with JDBC for MySQL-based CRUD operations."
        }
    ],
    certifications: [
        {
            id: "cert-1",
            date: "2024",
            title: "Cloud Computing Certification",
            description: "Certified by NPTEL",
            details: "Cloud Computing fundamentals and implementation"
        },
        {
            id: "cert-2",
            date: "2024",
            title: "Programming in Java",
            description: "Certified by NPTEL",
            details: "Java programming concepts and applications"
        },
        {
            id: "cert-3",
            date: "2024",
            title: "Responsive Web Development",
            description: "Free Code Camp's Certificate Workshop",
            details: "Modern web development practices and responsive design"
        }
    ],
    achievements: [
        {
            id: "achievement-1",
            date: "2025",
            title: "Research Paper Presentation",
            description: "WAMS 2025 (Wireless Antenna and Microwave Symposium)",
            details: "Presented first research paper organized by IITDM Kancheepuram and IEEE AP-S."
        },
        {
            id: "achievement-2",
            date: "2025",
            title: "GATE Qualification",
            description: "Graduate Aptitude Test in Engineering",
            details: "Qualified GATE 2025 in the first attempt."
        }
    ]
};

function createTimelineItem(item, isLast) {
    return `
                    <div class="timeline-item relative flex items-start group">
                        <div class="flex flex-col items-center mr-6">
                            <div class="timeline-dot w-4 h-4 rounded-full bg-blue-500 border-2 border-[#161616] z-10"></div>
                            ${!isLast ? '<div class="w-0.5 h-20 bg-[#2a2a2a] mt-2"></div>' : ''}
                        </div>
                        <div class="timeline-card flex-1 mb-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                            <div class="flex justify-between items-start mb-3">
                                <span class="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                                    ${item.date}
                                </span>
                                ${item.location ? `<span class="text-xs text-gray-400">${item.location}</span>` : ''}
                            </div>
                            <h3 class="text-lg font-semibold text-white mb-2">
                                ${item.title}
                            </h3>
                            <p class="text-sm text-gray-400 leading-relaxed mb-2">
                                ${item.description}
                            </p>
                            ${item.details ? `<p class="text-sm text-gray-300 font-medium">${item.details}</p>` : ''}
                        </div>
                    </div>
                `;
}

function renderTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items
        .map((item, index) => createTimelineItem(item, index === items.length - 1))
        .join('');
}

const tools = [
    // Design Tools
    {
        id: 1,
        name: "Figma",
        description: "Design Tool",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },

    // Frontend Technologies
    {
        id: 2,
        name: "HTML",
        description: "Markup Language",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 3,
        name: "CSS",
        description: "Styling",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 4,
        name: "JavaScript",
        description: "Programming Language",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 5,
        name: "React",
        description: "Frontend Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },

    // CSS Frameworks
    {
        id: 6,
        name: "Bootstrap",
        description: "CSS Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    // {
    //   id: 7,
    //   name: "TailwindCSS",
    //   description: "CSS Framework",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    //   bgColor: "bg-[#1a1a1a]",
    //   borderColor: "border-[#2a2a2a]",
    // },

    // Version Control & Collaboration
    {
        id: 8,
        name: "Git",
        description: "Version Control",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 9,
        name: "GitHub",
        description: "Code Repository",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },

    // Backend Technologies
    {
        id: 10,
        name: "Node.JS",
        description: "Backend Runtime",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 11,
        name: "Express.JS",
        description: "Backend Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },

    // Databases
    {
        id: 12,
        name: "MongoDB",
        description: "NoSQL Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 13,
        name: "MySQL",
        description: "SQL Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },

    // Programming Languages
    {
        id: 14,
        name: "Python",
        description: "Programming Language",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
    {
        id: 15,
        name: "Java",
        description: "Programming Language",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        bgColor: "bg-[#1a1a1a]",
        borderColor: "border-[#2a2a2a]",
    },
];

const projects = [
    {
        id: 1,
        title: "Photographer Portfolio",
        technologies: ["HTML", "CSS", "JavaScript", "AOS Library"],
        image:
            "assets/p2.png",
        gradient:
            "bg-gradient-to-br from-yellow-400 via-orange-400 to-green-400",
        description:
            "Modern and responsive website to showcase photography work using HTML5, CSS3, and JavaScript. Deployed on Netlify with GitHub version control.",
        link: "https://sunilkumar4545.github.io/Photographer-Portfolio.github.io/index.html"
    },
    {
        id: 2,
        title: "College Management Website",
        technologies: ["HTML", "CSS", "Bootstrap", "JDBC"],
        image:
            "assets/p1.png",
        gradient: "bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400",
        description:
            "Responsive college site with sections such as Home, Courses, and Contact. Connected to MySQL database using JDBC for full CRUD operations.",
        link: "https://pace-ac-in.netlify.app/"
    },
    {
        id: 3,
        title: "Node.js Authentication System",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        gradient: "bg-gradient-to-br from-red-400 via-pink-400 to-orange-400",
        description:
            "Complete authentication system with secure backend architecture. Implemented user registration, login with password hashing using Bcrypt and JWT tokens.",
        link: "https://github.com/sunilkumar4545/Node-auth-MVC"
    },
    {
        id: 4,
        title: "Full Stack Music App",
        technologies: ["API", "MVC", "Development"],
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
        gradient:
            "bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-400",
        description:
            "Full stack music application with MVC architecture and API integration for seamless music streaming experience.",
    },
];

function createProjectCard(project) {
    return `
          <div class="project-card bg-[#1a1a1a] border-[#2a2a2a] border rounded-xl overflow-hidden cursor-pointer group" data-project-id="${project.id}" data-project-link="${project.link || ''}">
            <div class="relative">
              <!-- Gradient background -->
              <div class="${project.gradient
        } h-48 p-4 flex items-center justify-center relative overflow-hidden">
                <!-- Project screenshot -->
                <div class="relative bg-white rounded-lg shadow-2xl project-image">
                  <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="w-64 h-40 object-cover rounded-lg"
                    onerror="this.style.display='none'"
                  />
                </div>
              </div>

              <!-- Arrow button -->
              <div class="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center arrow-button">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </div>
            </div>

            <!-- Card content -->
            <div class="p-6">
              <h3 class="text-white font-semibold text-lg mb-3">
                ${project.title}
              </h3>
              <div class="flex flex-wrap gap-2 mb-3">
                ${project.technologies
            .map(
                (tech) => `
                  <span class="px-3 py-1 text-xs bg-[#2a2a2a] text-gray-400 rounded-full">
                    ${tech}
                  </span>
                `
            )
            .join("")}
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                ${project.description}
              </p>
            </div>
          </div>
        `;
}

function renderProjects() {
    const container = document.getElementById("portfolio-container");
    container.innerHTML = projects
        .map((project) => createProjectCard(project))
        .join("");
    
    // Add click event listeners to project cards
    const projectCards = container.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const projectLink = card.getAttribute('data-project-link');
        if (projectLink) {
            card.addEventListener('click', () => {
                window.open(projectLink, '_blank', 'noopener,noreferrer');
            });
            // Add hover effect for clickable cards
            card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        }
    });
}

function createToolCard(tool) {
    let iconClass = "icon";
    if (tool.name === "GitHub") {
        iconClass = "icon github-icon";
    } else if (tool.name === "Express.JS") {
        iconClass = "icon express-icon";
    }

    return `
                <div class="card ${tool.bgColor} ${tool.borderColor} border p-4 cursor-pointer rounded-xl">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <img
                                src="${tool.icon}"
                                alt="${tool.name}"
                                class="${iconClass} w-10 h-10 object-contain"
                                onerror="this.style.display='none'"
                            />
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-white font-semibold text-base mb-1 truncate">
                                ${tool.name}
                            </h3>
                            <p class="text-gray-400 text-sm truncate">
                                ${tool.description}
                            </p>
                        </div>
                    </div>
                </div>
            `;
}

function renderTools() {
    const container = document.getElementById("tools-container");
    container.innerHTML = tools
        .map((tool) => createToolCard(tool))
        .join("");
}

// Render tools and projects when the page loads
document.addEventListener("DOMContentLoaded", function () {
    renderTools();
    renderProjects();
    renderTimeline('education-timeline', timelineData.education);
    renderTimeline('internship-timeline', timelineData.internship);
    renderTimeline('certifications-timeline', timelineData.certifications);
    renderTimeline('achievements-timeline', timelineData.achievements);
    setupNavigation();
    setupMobileNavigation();
    setupPDFViewer();
    setupSliders();
});

// Mobile Navigation Setup
function setupMobileNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    // Open mobile menu
    function openMobileMenu() {
        mobileNavOverlay.classList.add('active');
        mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        if (mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close menu when clicking close button
    mobileCloseBtn.addEventListener('click', closeMobileMenu);

    // Close menu when clicking overlay background (outside sidebar)
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Prevent closing when clicking inside the sidebar content
    const mobileNavContent = document.querySelector('.mobile-nav-content');
    if (mobileNavContent) {
        mobileNavContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Handle mobile nav item clicks
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all mobile nav items
            mobileNavItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Update page title and meta description for SEO
            updatePageTitle(targetId);
            trackSection(targetId);
            
            // Close mobile menu
            closeMobileMenu();
            
            // Scroll to section after menu closes
            setTimeout(() => {
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update desktop nav active state too
                    const desktopNavItems = document.querySelectorAll('.nav-item');
                    desktopNavItems.forEach(nav => nav.classList.remove('active'));
                    const correspondingDesktopNav = document.querySelector(`.nav-item[href="#${targetId}"]`);
                    if (correspondingDesktopNav) {
                        correspondingDesktopNav.classList.add('active');
                    }
                }
            }, 300);
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Update mobile nav active state on scroll
    window.addEventListener('scroll', function() {
        const sections = ['home', 'tools', 'experience', 'portfolio', 'research', 'blog', 'contact'];
        const scrollPosition = window.scrollY + 120;
        
        let currentSection = 'home';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop) {
                    currentSection = sectionId;
                }
            }
        });
        
        // Update active mobile navigation item
        mobileNavItems.forEach(nav => nav.classList.remove('active'));
        const activeMobileNav = document.querySelector(`.mobile-nav-item[href="#${currentSection}"]`);
        if (activeMobileNav) activeMobileNav.classList.add('active');
    });
}

// Setup PDF Image Slideshow
function setupPDFViewer() {
    let currentPage = 0; // Start from 0 for array indexing
    const totalPages = 5;
    const pdfImageSlider = document.getElementById('pdf-image-slider');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const autoPlayBtn = document.getElementById('auto-play-pdf');
    const openPdfBtn = document.getElementById('open-pdf');
    const pageIndicators = document.querySelectorAll('.page-indicator');

    let autoPlayInterval = null;
    let isAutoPlaying = false;
    const autoPlayDelay = 3000; // 3 seconds

    // Update PDF image display
    function updatePDFPage() {
        const translateX = -currentPage * 100;
        pdfImageSlider.style.transform = `translateX(${translateX}%)`;
        currentPageSpan.textContent = currentPage + 1;

        // Update page indicators
        pageIndicators.forEach((indicator, index) => {
            if (index === currentPage) {
                indicator.classList.remove('bg-gray-400');
                indicator.classList.add('bg-blue-500');
            } else {
                indicator.classList.remove('bg-blue-500');
                indicator.classList.add('bg-gray-400');
            }
        });
    }

    // Auto advance to next page
    function autoAdvancePage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
        } else {
            currentPage = 0; // Loop back to first page
        }
        updatePDFPage();
    }

    // Start auto play
    function startAutoPlay() {
        if (!isAutoPlaying) {
            isAutoPlaying = true;
            autoPlayInterval = setInterval(autoAdvancePage, autoPlayDelay);

            // Update button appearance
            autoPlayBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
            autoPlayBtn.classList.add('bg-red-500', 'hover:bg-red-600');
            autoPlayBtn.title = 'Stop Auto Play';

            // Change icon to pause
            autoPlayBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        `;
        }
    }

    // Stop auto play
    function stopAutoPlay() {
        if (isAutoPlaying) {
            isAutoPlaying = false;
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;

            // Update button appearance
            autoPlayBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
            autoPlayBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            autoPlayBtn.title = 'Auto Play';

            // Change icon back to play
            autoPlayBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        `;
        }
    }

    // Previous page
    prevPageBtn.addEventListener('click', () => {
        stopAutoPlay(); // Stop auto play when manually navigating
        if (currentPage > 0) {
            currentPage--;
            updatePDFPage();
        }
    });

    // Next page
    nextPageBtn.addEventListener('click', () => {
        stopAutoPlay(); // Stop auto play when manually navigating
        if (currentPage < totalPages - 1) {
            currentPage++;
            updatePDFPage();
        }
    });

    // Auto play toggle
    autoPlayBtn.addEventListener('click', () => {
        if (isAutoPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    // Open full PDF
    openPdfBtn.addEventListener('click', () => {
        window.open('SUNIL FINAL PAPER.pdf', '_blank');
    });

    // Page indicator clicks
    pageIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoPlay(); // Stop auto play when manually navigating
            currentPage = index;
            updatePDFPage();
        });
    });

    // Set total pages
    totalPagesSpan.textContent = totalPages;

    // Initialize first page
    updatePDFPage();

    // Start auto play automatically
    setTimeout(() => {
        startAutoPlay();
    }, 1000); // Start auto play after 1 second
}

// Slider functionality
function setupSliders() {
    // PPT Slider functionality
    let currentSlide = 0;
    const totalSlides = 19;
    const pptSlider = document.getElementById('ppt-slider');
    const currentSlideSpan = document.getElementById('current-slide');
    const slideIndicators = document.querySelectorAll('.slide-indicator');
    const autoPlayPptBtn = document.getElementById('auto-play-ppt');
    const openPptBtn = document.getElementById('open-ppt');

    let autoPlayPptInterval = null;
    let isPptAutoPlaying = false;
    const autoPlayPptDelay = 4000; // 4 seconds for PPT slides

    function updatePPTSlider() {
        pptSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        currentSlideSpan.textContent = currentSlide + 1;

        slideIndicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.remove('bg-gray-400');
                indicator.classList.add('bg-orange-500');
            } else {
                indicator.classList.remove('bg-orange-500');
                indicator.classList.add('bg-gray-400');
            }
        });
    }

    // Auto advance PPT slide
    function autoAdvancePptSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Loop back to first slide
        }
        updatePPTSlider();
    }

    // Start PPT auto play
    function startPptAutoPlay() {
        if (!isPptAutoPlaying) {
            isPptAutoPlaying = true;
            autoPlayPptInterval = setInterval(autoAdvancePptSlide, autoPlayPptDelay);

            // Update button appearance
            autoPlayPptBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
            autoPlayPptBtn.classList.add('bg-red-500', 'hover:bg-red-600');
            autoPlayPptBtn.title = 'Stop Auto Play';

            // Change icon to pause
            autoPlayPptBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        `;
        }
    }

    // Stop PPT auto play
    function stopPptAutoPlay() {
        if (isPptAutoPlaying) {
            isPptAutoPlaying = false;
            clearInterval(autoPlayPptInterval);
            autoPlayPptInterval = null;

            // Update button appearance
            autoPlayPptBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
            autoPlayPptBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            autoPlayPptBtn.title = 'Auto Play';

            // Change icon back to play
            autoPlayPptBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        `;
        }
    }

    // Previous slide
    document.getElementById('prev-slide').addEventListener('click', () => {
        stopPptAutoPlay(); // Stop auto play when manually navigating
        if (currentSlide > 0) {
            currentSlide--;
            updatePPTSlider();
        }
    });

    // Next slide
    document.getElementById('next-slide').addEventListener('click', () => {
        stopPptAutoPlay(); // Stop auto play when manually navigating
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updatePPTSlider();
        }
    });

    // Auto play toggle
    autoPlayPptBtn.addEventListener('click', () => {
        if (isPptAutoPlaying) {
            stopPptAutoPlay();
        } else {
            startPptAutoPlay();
        }
    });

    // Open full PowerPoint
    openPptBtn.addEventListener('click', () => {
        window.open('ID 329.pptx', '_blank');
    });

    // Slide indicator clicks
    slideIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopPptAutoPlay(); // Stop auto play when manually navigating
            currentSlide = index;
            updatePPTSlider();
        });
    });

    // Initialize first slide
    updatePPTSlider();

    // Gallery Slider functionality
    let currentGallery = 0;
    const totalGalleryImages = 6;
    const gallerySlider = document.getElementById('gallery-slider');
    const currentGallerySpan = document.getElementById('current-gallery');
    const galleryIndicators = document.querySelectorAll('.gallery-indicator');
    const autoPlayGalleryBtn = document.getElementById('auto-play-gallery');

    let autoPlayGalleryInterval = null;
    let isGalleryAutoPlaying = false;
    const autoPlayGalleryDelay = 3500; // 3.5 seconds for gallery

    function updateGallerySlider() {
        gallerySlider.style.transform = `translateX(-${currentGallery * 100}%)`;
        currentGallerySpan.textContent = currentGallery + 1;

        galleryIndicators.forEach((indicator, index) => {
            if (index === currentGallery) {
                indicator.classList.remove('bg-gray-400');
                indicator.classList.add('bg-purple-500');
            } else {
                indicator.classList.remove('bg-purple-500');
                indicator.classList.add('bg-gray-400');
            }
        });
    }

    // Auto advance gallery image
    function autoAdvanceGalleryImage() {
        if (currentGallery < totalGalleryImages - 1) {
            currentGallery++;
        } else {
            currentGallery = 0; // Loop back to first image
        }
        updateGallerySlider();
    }

    // Start gallery auto play
    function startGalleryAutoPlay() {
        if (!isGalleryAutoPlaying) {
            isGalleryAutoPlaying = true;
            autoPlayGalleryInterval = setInterval(autoAdvanceGalleryImage, autoPlayGalleryDelay);

            // Update button appearance
            autoPlayGalleryBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
            autoPlayGalleryBtn.classList.add('bg-red-500', 'hover:bg-red-600');
            autoPlayGalleryBtn.title = 'Stop Auto Play';

            // Change icon to pause
            autoPlayGalleryBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        `;
        }
    }

    // Stop gallery auto play
    function stopGalleryAutoPlay() {
        if (isGalleryAutoPlaying) {
            isGalleryAutoPlaying = false;
            clearInterval(autoPlayGalleryInterval);
            autoPlayGalleryInterval = null;

            // Update button appearance
            autoPlayGalleryBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
            autoPlayGalleryBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            autoPlayGalleryBtn.title = 'Auto Play';

            // Change icon back to play
            autoPlayGalleryBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        `;
        }
    }

    // Gallery navigation event listeners
    document.getElementById('prev-gallery').addEventListener('click', () => {
        stopGalleryAutoPlay(); // Stop auto play when manually navigating
        if (currentGallery > 0) {
            currentGallery--;
            updateGallerySlider();
        }
    });

    document.getElementById('next-gallery').addEventListener('click', () => {
        stopGalleryAutoPlay(); // Stop auto play when manually navigating
        if (currentGallery < totalGalleryImages - 1) {
            currentGallery++;
            updateGallerySlider();
        }
    });

    // Gallery auto play toggle
    autoPlayGalleryBtn.addEventListener('click', () => {
        if (isGalleryAutoPlaying) {
            stopGalleryAutoPlay();
        } else {
            startGalleryAutoPlay();
        }
    });

    // Gallery indicator clicks
    galleryIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopGalleryAutoPlay(); // Stop auto play when manually navigating
            currentGallery = index;
            updateGallerySlider();
        });
    });

    // Initialize first gallery image
    updateGallerySlider();

    // Start gallery auto play automatically
    setTimeout(() => {
        startGalleryAutoPlay();
    }, 2000); // Start gallery auto play after 2 seconds
}

// Navigation functionality
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    // Add click event listeners for smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Don't prevent default for external links (like the blog link)
            if (href.startsWith('http') || href.includes('://')) {
                return; // Let the external link work normally
            }

            e.preventDefault();

            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', function () {
        const sections = ['home', 'tools', 'experience', 'portfolio', 'research', 'blog', 'contact'];
        const scrollPosition = window.scrollY + 120; // Increased offset for better detection

        let currentSection = 'home'; // Default to home

        // Find which section we're currently in
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // If we're past the start of this section, it becomes current
                if (scrollPosition >= sectionTop) {
                    currentSection = sectionId;
                }
            }
        });

        // Update active navigation item
        navItems.forEach(nav => nav.classList.remove('active'));
        const activeNav = document.querySelector(`a[href="#${currentSection}"]`);
        if (activeNav) activeNav.classList.add('active');
    });
}

// PDF Slider functionality
let currentPdfPage = 0;
const totalPdfPages = 5;
let pdfAutoPlay = false;
let pdfAutoPlayInterval;

// PPT Slider functionality
let currentSlide = 0;
const totalSlides = 19;
let pptAutoPlay = false;
let pptAutoPlayInterval;

// Gallery Slider functionality
let currentGallery = 0;
const totalGalleryImages = 8;
let galleryAutoPlay = false;
let galleryAutoPlayInterval;

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // PDF Slider Controls
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPdfPage > 0) {
                currentPdfPage--;
                updatePdfSlider();
            }
        });
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            if (currentPdfPage < totalPdfPages - 1) {
                currentPdfPage++;
                updatePdfSlider();
            }
        });
    }

    // PPT Slider Controls
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updatePptSlider();
            }
        });
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updatePptSlider();
            }
        });
    }

    // Gallery Slider Controls
    const prevGalleryBtn = document.getElementById('prev-gallery');
    const nextGalleryBtn = document.getElementById('next-gallery');

    if (prevGalleryBtn) {
        prevGalleryBtn.addEventListener('click', () => {
            if (currentGallery > 0) {
                currentGallery--;
                updateGallerySlider();
            }
        });
    }

    if (nextGalleryBtn) {
        nextGalleryBtn.addEventListener('click', () => {
            if (currentGallery < totalGalleryImages - 1) {
                currentGallery++;
                updateGallerySlider();
            }
        });
    }

    // Auto-play controls
    const autoPlayPdfBtn = document.getElementById('auto-play-pdf');
    const autoPlayPptBtn = document.getElementById('auto-play-ppt');
    const autoPlayGalleryBtn = document.getElementById('auto-play-gallery');

    if (autoPlayPdfBtn) {
        autoPlayPdfBtn.addEventListener('click', () => {
            pdfAutoPlay = !pdfAutoPlay;
            if (pdfAutoPlay) {
                pdfAutoPlayInterval = setInterval(() => {
                    currentPdfPage = (currentPdfPage + 1) % totalPdfPages;
                    updatePdfSlider();
                }, 3000);
            } else {
                clearInterval(pdfAutoPlayInterval);
            }
        });
    }

    if (autoPlayPptBtn) {
        autoPlayPptBtn.addEventListener('click', () => {
            pptAutoPlay = !pptAutoPlay;
            if (pptAutoPlay) {
                pptAutoPlayInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updatePptSlider();
                }, 3000);
            } else {
                clearInterval(pptAutoPlayInterval);
            }
        });
    }

    if (autoPlayGalleryBtn) {
        autoPlayGalleryBtn.addEventListener('click', () => {
            galleryAutoPlay = !galleryAutoPlay;
            if (galleryAutoPlay) {
                galleryAutoPlayInterval = setInterval(() => {
                    currentGallery = (currentGallery + 1) % totalGalleryImages;
                    updateGallerySlider();
                }, 3000);
            } else {
                clearInterval(galleryAutoPlayInterval);
            }
        });
    }

    // Page indicator click handlers
    document.querySelectorAll('.page-indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentPdfPage = index;
            updatePdfSlider();
        });
    });

    // Slide indicator click handlers
    document.querySelectorAll('.slide-indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updatePptSlider();
        });
    });

    // Gallery indicator click handlers
    document.querySelectorAll('.gallery-indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentGallery = index;
            updateGallerySlider();
        });
    });
});

// Update slider functions
function updatePdfSlider() {
    const slider = document.getElementById('pdf-image-slider');
    const indicators = document.querySelectorAll('.page-indicator');
    const currentPageElement = document.getElementById('current-page');

    if (slider) {
        slider.style.transform = `translateX(-${currentPdfPage * 100}%)`;
    }

    if (currentPageElement) {
        currentPageElement.textContent = currentPdfPage + 1;
    }

    indicators.forEach((indicator, index) => {
        if (index === currentPdfPage) {
            indicator.classList.remove('bg-gray-400');
            indicator.classList.add('bg-blue-500');
        } else {
            indicator.classList.remove('bg-blue-500');
            indicator.classList.add('bg-gray-400');
        }
    });
}

function updatePptSlider() {
    const slider = document.getElementById('ppt-slider');
    const indicators = document.querySelectorAll('.slide-indicator');
    const currentSlideElement = document.getElementById('current-slide');

    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide + 1;
    }

    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.remove('bg-gray-400');
            indicator.classList.add('bg-orange-500');
        } else {
            indicator.classList.remove('bg-orange-500');
            indicator.classList.add('bg-gray-400');
        }
    });
}

function updateGallerySlider() {
    const slider = document.getElementById('gallery-slider');
    const indicators = document.querySelectorAll('.gallery-indicator');
    const currentGalleryElement = document.getElementById('current-gallery');

    if (slider) {
        slider.style.transform = `translateX(-${currentGallery * 100}%)`;
    }

    if (currentGalleryElement) {
        currentGalleryElement.textContent = currentGallery + 1;
    }

    indicators.forEach((indicator, index) => {
        if (index === currentGallery) {
            indicator.classList.remove('bg-gray-400');
            indicator.classList.add('bg-purple-500');
        } else {
            indicator.classList.remove('bg-purple-500');
            indicator.classList.add('bg-gray-400');
        }
    });
}
