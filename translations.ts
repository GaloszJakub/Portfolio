export type Language = 'pl' | 'en';

export const translations = {
    en: {
        nav: {
            start: 'Start',
            context: 'Context',
            stack: 'Stack',
            work: 'Work & Services',
            action: 'Action',
        },
        hero: {
            available: 'Available for hire',
            greeting: "Hi, I'm",
            description: 'A Creative Developer and UI/UX Engineer based in the digital realm. I craft accessible, pixel-perfect, and performant web experiences.',
            seeWork: 'See My Work',
            contact: 'Contact Me',
        },
        about: {
            section: '01 / About Me',
            title: 'The person behind',
            titleHighlight: 'the code.',
            bioTitle: 'Junior Developer & Student',
            bioText: "Hi! I'm a Junior Developer and a student at the beginning of my professional journey. While my commercial experience is still growing, I make up for it with a huge passion for coding and a drive for continuous improvement. I give 100% in every project, focusing on modern technologies and aesthetic design.",
            experience: 'YEAR EXPERIENCE',
            remote: 'Remote',
            location: 'Based in Bielsko-Biała, PL',
            approach: 'My Approach',
            approachText: 'I believe in shipping fast, iterating often, and never compromising on accessibility. User experience is the north star.',
            designDriven: 'Design Driven',
            focus: 'Focus',
            focusText: 'Currently diving deep into WebGPU and advanced animation performance.',
        },
        tech: {
            section: '02 / The Arsenal',
            title: 'Tech Stack',
            frontend: 'Frontend',
            backend: 'Backend & Services',
            tools: 'Tools & Workflow',
            testing: 'Testing',
            design: 'Design',
        },
        services: {
            section: '03 / Projects',
            title: 'Projects',
            projectsSection: '03 / Selected Works',
            projectsTitle: 'Projects',
            items: [
                { id: '01', title: 'Creative Development', description: 'Websites that defy standard grids. WebGL, 3D, and interaction heavy.' },
                { id: '02', title: 'UI/UX Engineering', description: 'Design systems that scale. Micro-interactions that delight.' },
                { id: '03', title: 'Technical Strategy', description: 'Choosing the right stack for the chaos. Performance optimization.' },
                { id: '04', title: 'Motion Design', description: 'Bringing static pixels to life with physics and timing.' },
            ],
            projectList: {
                '01': {
                    category: 'Mobile App',
                    description: 'Mobile app for University of Bielsko-Biała students. Check your class schedule offline, add notes, and never miss a lecture.',
                    features: ['Offline-first mode', 'Group search', 'Class notes', 'Local notifications', 'Cloud sync']
                },
                '02': {
                    category: 'HR / Career Page',
                    description: 'Career platform for RekordIT, a company with 35+ years in IT. Showcases job offers, internships, and practices in an engaging interface.',
                    features: ['Job listings with accordion', 'Internship sections', 'Contact form', 'Video gallery', 'Admin panel']
                },
                '03': {
                    category: 'Multimedia / VOD',
                    description: 'Modern app for managing personal movie/series libraries. Elegant VOD interface, PWA support, and TMDB integration.',
                    features: ['TMDB Cataloging', 'Collections & Favorites', 'Admin Panel', 'Installable PWA', 'Responsive Design']
                },
                '04': {
                    category: 'Education / HR System',
                    description: 'Comprehensive system for digitizing the periodic evaluation of academic staff. Automates collection and verification of achievements.',
                    features: ['Multi-category surveys', 'Roles (Admin, Dean, Staff)', 'Keycloak Integration', 'Library Module', 'Analytics Panel']
                },
                '05': {
                    category: 'Tourism / Hospitality',
                    description: '"Sielska Ostoja" is a modern showcase for a luxury resort in the Little Beskids, inviting users into a world of relaxation through elegant design and smooth animations.',
                    features: ['"7 Days in Sielska Ostoja" Timeline', 'Extensive Photo Gallery', 'Testimonials & FAQ', 'Additional Services', 'Contact Form']
                }
            },
        },
        experience: {
            section: '04 / Experience',
            title: 'My Path',
            education: 'Education',
            work: 'Work',
            educationItems: [
                { id: '1', title: 'Computer Science', company: 'University', year: 'Present', description: 'Currently studying Computer Science, diving deep into software engineering and algorithms.' },
                { id: '2', title: 'IT Technician', company: 'Technical High School', year: 'Completed', description: 'Graduated from Technical High School. Gained solid foundations in OS, networks, and programming.' },
            ],
            workItems: [
                { id: '3', title: 'Software Developer Intern', company: 'Rekord SI', year: 'Internship', description: 'Professional internship at Rekord SI in Bielsko-Biała. Worked within a dev team, learning the software development lifecycle.' },
                { id: '4', title: 'QA Tester', company: 'uTest', year: 'Freelance', description: 'A few months of freelance testing on uTest platform. Testing web and mobile apps, bug reporting.' },
            ],
        },
        contact: {
            section: '05 / Contact',
            title: "Let's work",
            titleLine2: 'together.',
            formIntro: 'Hi, my name is',
            formLooking: ". I'm looking to build a",
            formReach: '. You can reach me at',
            formEnd: 'to discuss the details.',
            namePlaceholder: 'Your Name',
            projectPlaceholder: 'Website / App',
            emailPlaceholder: 'your@email.com',
            send: 'Send Message',
            footer: 'Built with React & Framer Motion.',
            email: 'kubagalosz@gmail.com',
            location: 'Bielsko-Biała, Poland',
        },
    },
    pl: {
        nav: {
            start: 'Start',
            context: 'O mnie',
            stack: 'Technologie',
            work: 'Projekty',
            action: 'Kontakt',
        },
        hero: {
            available: 'Dostępny do współpracy',
            greeting: 'Cześć, jestem',
            description: 'Kreatywny Developer i UI/UX Engineer. Tworzę dostępne, perfekcyjne pikselowo i wydajne strony internetowe.',
            seeWork: 'Zobacz projekty',
            contact: 'Kontakt',
        },
        about: {
            section: '01 / O mnie',
            title: 'Osoba za',
            titleHighlight: 'kodem.',
            bioTitle: 'Junior Developer & Student',
            bioText: 'Cześć! Jestem Junior Developerem i studentem na początku swojej zawodowej drogi. Choć moje doświadczenie komercyjne jest jeszcze niewielkie, nadrabiam to ogromną pasją do kodowania i chęcią ciągłego rozwoju. W każdym projekcie daję z siebie 100%, stawiając na nowoczesne technologie i estetyczny design.',
            experience: 'ROK DOŚWIADCZENIA',
            remote: 'Zdalnie',
            location: 'Bielsko-Biała, PL',
            approach: 'Moje podejście',
            approachText: 'Wierzę w szybkie dostarczanie, częste iteracje i nieustępliwe dbanie o dostępność. User experience to priorytet.',
            designDriven: 'Kierowany designem',
            focus: 'Skupienie',
            focusText: 'Aktualnie zagłębiam się w WebGPU i zaawansowaną wydajność animacji.',
        },
        tech: {
            section: '02 / Arsenał',
            title: 'Technologie',
            frontend: 'Frontend',
            backend: 'Backend i usługi',
            tools: 'Narzędzia',
            testing: 'Testowanie',
            design: 'Design',
        },
        services: {
            section: '03 / Projekty',
            title: 'Projekty',
            projectsSection: '03 / Wybrane prace',
            projectsTitle: 'Projekty',
            items: [
                { id: '01', title: 'Kreatywny Development', description: 'Strony wykraczające poza standardowe siatki. WebGL, 3D, interakcje.' },
                { id: '02', title: 'UI/UX Engineering', description: 'Systemy designu, które skalują się. Mikrointerakcje, które zachwycają.' },
                { id: '03', title: 'Strategia techniczna', description: 'Dobór odpowiedniego stacku. Optymalizacja wydajności.' },
                { id: '04', title: 'Motion Design', description: 'Ożywianie statycznych pikseli fizyką i timingiem.' },
            ],
            projectList: {
                '01': {
                    category: 'Aplikacja Mobilna',
                    description: 'Aplikacja mobilna dla studentów Uniwersytetu Bielsko-Bialskiego. Sprawdzaj plan zajęć offline, dodawaj notatki i nigdy nie przegap wykładu.',
                    features: ['Tryb offline-first', 'Wyszukiwarka grup', 'Notatki do zajęć', 'Powiadomienia lokalne', 'Synchronizacja z chmurą']
                },
                '02': {
                    category: 'HR / Strona Kariery',
                    description: 'Platforma rekrutacyjna firmy RekordIT z ponad 35-letnim doświadczeniem w IT. Prezentuje oferty pracy, staże i praktyki w animowanej formie.',
                    features: ['Oferty pracy z akordeonem', 'Sekcje dla stażystów', 'Formularz kontaktowy', 'Galeria wideo', 'Panel administracyjny']
                },
                '03': {
                    category: 'Multimedia / VOD',
                    description: 'Nowoczesna aplikacja do zarządzania osobistą biblioteką filmów i seriali. Elegancki interfejs VOD, PWA i integracja z TMDB.',
                    features: ['Katalogowanie z TMDB', 'Kolekcje i Ulubione', 'Panel administratora', 'Installable PWA', 'Responsywny design']
                },
                '04': {
                    category: 'Edukacja / System HR',
                    description: 'Kompleksowy system do cyfryzacji procesu okresowej oceny pracowników dydaktycznych. Automatyzuje gromadzenie i weryfikację osiągnięć.',
                    features: ['Wielokategorialne ankiety', 'Role (Admin, Dziekan, Pracownik)', 'Integracja Keycloak', 'Moduł biblioteczny', 'Panel analityczny']
                },
                '05': {
                    category: 'Turystyka / Hospitality',
                    description: '"Sielska Ostoja" to nowoczesna wizytówka luksusowego ośrodka w Beskidzie Małym, zapraszająca użytkownika do świata relaksu poprzez elegancki design i płynne animacje.',
                    features: ['Oś czasu "7 Dni w Sielskiej Ostoi"', 'Rozbudowana galeria', 'Sekcja opinii i FAQ', 'Usługi dodatkowe i atrakcje', 'Formularz kontaktowy']
                }
            },
        },
        experience: {
            section: '04 / Doświadczenie',
            title: 'Moja Ścieżka',
            education: 'Edukacja',
            work: 'Praca',
            present: 'Obecnie',
            educationItems: [
                { id: '1', title: 'Informatyka', company: 'Uniwersytet', year: 'Obecnie', description: 'Aktualnie studiuję informatykę, na specjalizacji inżynierii oprogramowania. ' },
                { id: '2', title: 'Technik Informatyk', company: 'Technikum', year: 'Ukończone', description: '' },
            ],
            workItems: [
                { id: '3', title: 'Praktykant Programista', company: 'Rekord SI', year: 'Praktyki', description: 'Praktyki zawodowe w firmie Rekord SI w Bielsku-Białej. Praca w zespole programistycznym, poznanie cyklu wytwarzania oprogramowania.' },
                { id: '4', title: 'Tester QA', company: 'uTest', year: 'Freelance', description: 'Kilka miesięcy pracy jako Freelance Tester na platformie uTest. Testowanie aplikacji webowych i mobilnych, raportowanie błędów.' },
            ],
        },
        contact: {
            section: '04 / Kontakt',
            title: 'Pracujmy',
            titleLine2: 'razem.',
            formIntro: 'Cześć, mam na imię',
            formLooking: '. Szukam kogoś do stworzenia',
            formReach: '. Możesz się ze mną skontaktować pod',
            formEnd: 'żeby omówić szczegóły.',
            namePlaceholder: 'Twoje imię',
            projectPlaceholder: 'Strona / Aplikacja',
            emailPlaceholder: 'twoj@email.com',
            send: 'Wyślij wiadomość',
            footer: 'Zbudowane z React i Framer Motion.',
            email: 'kubagalosz@gmail.com',
            location: 'Bielsko-Biała, Polska',
        },
    },
} as const;
