const AboutPage = {
    htmlData: `
    <div class="side">
        <div class="side-l">
            <button class="btn" id="abtn0" onclick="aboutRout(0);">About Inphant Api</button>
            <button class="btn" id="abtn1" onclick="aboutRout(1);">About kidKrishkode</button>
            <button class="btn" id="abtn2" onclick="aboutRout(2);">About Krishnendu Mitra</button>
            <button class="btn" id="abtn3" onclick="aboutRout(3);">Guides &amp; Dependencies</button>
        </div>
        <div class="side-r" id="ad0">
            <h3>About Inphant Api</h3>
            <p>There are several types of documentation available on this website:</p><br>
            <ul>
                <li>Vision of Inphant Api</li>
                <li>Code reference documentation</li>
                <li>Nomenclature of Inphant Api</li>
                <li>Finger print of Inphant Api</li>
            </ul><br>
            <h3>Vision of Inphant Api</h3>
            <p>Inphant Api, the innovation of the visionary '<o onclick="aboutRout(1);">kidKrishkode</o>,' stands as a beacon in the 
                realm of education and innovation. Founded on November 14, 2023, Inphant Api has swiftly become a hub of inspiration and 
                knowledge for students, professionals, and enthusiasts across diverse domains.<br><br>This digital haven is not merely a 
                repository of code; it's a treasure trove of creativity, offering free and open-source college projects that extend beyond the 
                conventional boundaries of academia. Aimed at final year and semester students, Inphant Api's impact resonates far beyond the 
                college realm, reaching school students, office professionals, medical students, and programmers of all kinds.<br><br>What sets 
                Inphant Api apart is its commitment to providing more than just code snippets. Each project is a carefully crafted narrative, 
                complete with detailed ideas, concepts, and functionalities. Beyond the lines of code written in Node.js, Java, Kotlin, HTML, 
                CSS, Bootstrap, jQuery, MySQL, and REST API, lies a wealth of information that empowers users to not just replicate, but truly 
                understand the essence and purpose of each project.<br><br>From basic website templates to intricate mobile apps, Inphant Api 
                caters to a broad spectrum of interests and expertise. The projects transcend the ordinary, offering real-world applicability and 
                sparking excitement in the field of computer science. The founder's passion for sharing knowledge and fostering a collaborative 
                learning environment is evident in every aspect of Inphant Api.<br><br>More than a repository, Inphant Api is a community—an 
                ecosystem where ideas flourish, concepts come to life, and users are encouraged to explore, learn, and innovate. It's a testament 
                to the belief that knowledge should be freely accessible to all, breaking down barriers and fostering a culture of inclusivity.<br>
                <br>As users navigate through the intricacies of Inphant Api, they embark on a journey of discovery, guided by the philosophy that 
                education is not just about the destination but the experience along the way. In the hands of 'kidKrishkode,' Inphant Api isn't 
                just a website; it's a movement—a pulsating heart in the world of programming, beating with the rhythm of collaboration, creativity, 
                and the boundless potential of shared knowledge.
            </p>
            <div class="depend">Looking for latest projects releases?
                <ul>
                    <li>Node.js 20.x</li>
                    <li>Node.js 19.x</li>
                    <li>Node.js 18.x</li>
                    <li>Node.js 17.x</li>
                </ul>
                All projects
            </div>
            <h3>Code reference documentation</h3>
            <p>Inphant Api, the brainchild of 'kidKrishkode,' is a dynamic web platform built with cutting-edge technologies to provide an 
                enriching coding experience. The website is powered by Node.js as its backend, while the frontend showcases the simplicity 
                and elegance of vanilla HTML, CSS, and Mantissa.js. Adding a layer of efficiency, the middleware and database handling are 
                seamlessly managed by <o>Hex.js</o>—a powerful variant of JavaScript.<br><br>To ensure a seamless user experience, 
                Inphant Api incorporates internal-local APIs, skillfully crafted using Hex.js and FastAPI. Leveraging libraries and Bootstrap, 
                the platform boasts not only speed but also an aesthetically pleasing UI/UX design. Security is a top priority, and Inphant Api 
                is fortified with a firewall to safeguard user interactions.<br><br>In terms of documentation, the System Requirements 
                Specification (SRS) is a concise yet comprehensive document. Authored by Krish for Krish, this self-maintained SRS outlines 
                all project requirements and feasibility aspects. The simplicity of the SRS document aligns with the streamlined approach of 
                the website, making it easy to navigate the project's essentials.<br><br>In the realm of development methodologies, 
                Inphant Api follows a <a href="#">DevOps software model</a>, encompassing the entire lifecycle from creation to testing and 
                maintenance. While Agile methodologies were initially suggested, the transition to DevOps has proven instrumental in achieving 
                continuous integration and delivery, ensuring a robust and evolving platform. Inphant Api is not just a code repository; it's 
                a testament to the seamless fusion of technology, user experience, and efficient development practices.
            </p>
            <h3>Nomenclature of Inphant Api</h3>
            <p>The name "Inphant Api" was meticulously chosen to encapsulate the essence of our platform, reflecting its dynamic and vibrant 
                nature in the world of programming. At its core, "Inphant Api" signifies more than just a repository of code—it embodies a lively 
                and thriving ecosystem for projects. The intentional pairing of "Project" and "Pulse" serves as a profound message. Inphant Api 
                speaks to the heart of our mission: to provide a pulsating, energetic platform for free and open-source projects. The word "Pulse" 
                carries profound connotations, symbolizing life, energy, existence, and ceaseless activity. In the context of our website, it resonates 
                with the idea that the platform is alive—throbbing with the pulse of ongoing projects, ideas, and development activities.<br><br>
                Choosing "Inphant Api" is a deliberate nod to the vitality inherent in the field of programming. The name conveys the perpetual 
                heartbeat of innovation and collaboration, capturing the spirit of a community engaged in constant exploration and creation. 
                It signifies that within the platform, projects aren't static entities but living entities, evolving with the rhythm of continuous 
                development. Every line of code uploaded to Inphant Api is a heartbeat, a contribution to the pulsating energy of the programming 
                community. The name encapsulates the ethos of a platform that doesn't just host projects but breathes life into them. It's an 
                invitation for users to connect with the heartbeat of technology, to be part of a living, thriving ecosystem where ideas are born, 
                projects flourish, and the pulse of innovation beats incessantly.<br><br>Inphant Api is more than a name; it's a message. It's a 
                call to action, an affirmation that within this digital realm, the pulse of projects beats strong and vibrant, fostering a community 
                where creativity, collaboration, and constant activity define the very heartbeat of programming.
            </p>
            <h3>Finger print of Inphant Api</h3>
            <img src="./fav-icon/icon-l-o-c.png" alt="Inphant Api" id="logo1">
            <p>The Inphant Api logo stands as a testament to the intricate fusion of artistry and symbolism, embodying the essence of the platform 
                in a visually stunning manner. Crafted in the monogram logo format, it skillfully integrates each letter of the Inphant Api name into an 
                artistic composition, resulting in a distinctive and aesthetically pleasing design. At the heart of the logo lies an <o>elephant</o> symbol, strategically 
                incorporated to convey a profound message about knowledge. This symbol represents the boundless nature of knowledge, illustrating that 
                while knowledge knows no limits, the pursuit of controlled and curated knowledge leads to the ultimate wisdom. The infinity symbol serves 
                as a powerful metaphor for the perpetual growth and evolution within the realm of Inphant Api.<br><br>The color palette of the logo further 
                enhances its significance. A linear gradient featuring vibrant hues of <o>blue, #0c8ff9, aqua</o> creates a visually appealing spectrum. Each 
                color serves as a symbol: green for environment of innovation, yellow for hope, and #00ff09 for an belief and growth. Together, these colors 
                form a harmonious blend that echoes the spirit of Inphant Api—a platform that thrives on optimism, belief in possibilities, and an atmosphere 
                of unthinkable silence, where profound ideas come to life.<br><br>In its entirety, the Inphant Api logo is more than a visual representation; it's a 
                mark of distinction. It encapsulates the core values and aspirations of Inphant Api, inviting users into a world where artistic elegance meets 
                symbolic depth. This logo serves as a beacon, signaling not only the identity of the platform but also the <o>promise</o> of an enriching journey where 
                knowledge converges with artistry, creating a unique space for innovation and discovery.
            </p>
        </div>
        <div class="side-r" id="ad1">
            <h3>About kidKrishkode</h3>
            <img src="https://kidKrishkode.github.io/projectPulse.github.io/fav-icon/kidKrishkode.png" alt="kidKrishkode Logo" id="logo2">
            <p>kidKrishkode, a name that transcends mere nomenclature, is the brainchild of <o onclick="aboutRout(2);">Krishnendu Mitra</o>—a 
                visionary in the realm of programming education and innovation. As the driving force behind this digital haven, Krishnendu, 
                affectionately known as Krish, has curated an environment where technology becomes a playground for the curious minds eager to explore 
                the wonders of programming.<br><br>Dedicated to teaching and inspiring, kidKrishkode isn't just a website or a YouTube channel; it's 
                a platform that embodies the spirit of turning dreams into reality. Through insightful tutorials and engaging content, Kid Krish imparts 
                the art of programming, making the seemingly impossible, possible. His unique approach transforms complex concepts into digestible, 
                easy-to-understand lessons, fostering a community of aspiring developers.<br><br>kidKrishkode is not just about code; it's a movement—a 
                journey where creativity and innovation converge. Beyond tutorials, Kid Krish delves into the creation of free, user-friendly utilities 
                that transcend the boundaries of conventional programming. Each utility is a testament to the belief that technology, when harnessed with 
                passion and purpose, can be a force for good.<br><br>The name 'kidKrishkode' isn't just a brand; it's a dream realized. It symbolizes the 
                fulfillment of not only Krish's aspirations but also the collective dreams of those who seek to explore the limitless possibilities of 
                programming. It's a beacon for learners, dreamers, and creators, inviting them to embark on a transformative journey where knowledge knows 
                no bounds.<br><br>Through the myriad channels of <a href="#">YouTube</a>, <a href="#">Facebook</a>, and various social media platforms, 
                kidKrishkode has become more than a name—it's a community, a mentor, and a source of inspiration for all ages. Krishnendu Mitra's vision 
                extends beyond teaching; it's about empowering individuals to embrace the world of coding, turning their dreams into tangible achievements.
                <br><br>In the digital landscape sculpted by kidKrishkode, every line of code is a brushstroke, painting a picture of innovation, learning, 
                and boundless possibilities. As the journey unfolds, Krishnendu Mitra invites you to be part of this dream—where programming becomes not just 
                a skill but a key to unlocking your aspirations.
             </p>
        </div>
        <div class="side-r" id="ad2">
            <h3>About Krishnendu Mitra</h3>
            <img src="https://kidKrishkode.github.io/projectPulse.github.io/fav-icon/Krishdp.jpg" alt="Krishnendu Mitra" id="logo3">
            <p>Krishnendu Mitra, affectionately known as <o>Krish</o>, is a passionate student pursuing a Bachelor's degree in Computer Science and Engineering. 
                Hailing from the vibrant city of Kolkata in West Bengal, India, Krish embodies a multifaceted skill set and a relentless enthusiasm for 
                technology.<br><br>As a versatile <o>Full-stack web developer</o> and <o>AI prompt engineer</o>, Krish has honed his 
                expertise in a plethora of programming languages, including HTML, CSS, JavaScript, Node.js, Python, Bootstrap, React, Java, C, and C++, 
                Mongos, etc. His commitment to crafting seamless user experiences extends beyond conventional web development, delving into the realms 
                of Artificial intelligence and API integration.<br><br>Despite being in the early stages of his professional journey, Krish has already 
                left his mark. Having contributed to projects like <a href="#">Ai Dictionary</a> and <a href="#">EdEqu</a>, he has served as a technical 
                support stalwart and a mentor in computer education. Krish's dedication to his craft transcends the digital realm, reflecting his passion 
                for empowering others through technology. Beyond his technical prowess, Krish embraces linguistic diversity, proficient in Bengali, 
                Hindi, and English. Hailing from a modest, middle-class family, he exemplifies resilience and determination, showcasing that passion and 
                hard work supersede financial status.<br>
            </p>
            <div class="scroller">
                <div class="btn" id="krishleft" onclick="ksmPrev();">&lt;</div>
                <div class="screen"><img src="https://kidKrishkode.github.io/projectPulse.github.io/img/ksm006.jpg" id="krishimg"></div>
                <div class="btn" id="krishright" onclick="ksmNext();">&gt;</div>
            </div>
            <p>Open to new opportunities, Krish is not just a coder; he's a <o>storyteller</o>, weaving 
                narratives through lines of code and bringing ideas to life. His journey is a testament to the power of continuous learning, collaboration, 
                and the unwavering belief that technology can be a catalyst for positive change.<br><br>In every line of code and every project undertaken, 
                Krish aspires to make a meaningful impact, transforming challenges into opportunities for growth. As he navigates the ever-evolving landscape 
                of technology, Krishnendu Mitra remains a dedicated learner, creator, and advocate for the limitless possibilities that the digital world 
                presents.
            </p>
        </div>
        <div class="side-r" id="ad3">
            <h3>Guides &amp; Dependencies</h3>
            <p><b>Introduction:</b> Welcome to Inphant Api, where innovation meets collaboration. Our platform is a dynamic hub for free and open-source 
                projects, designed to inspire creativity and learning in the world of programming. The "Guide &amp; Dependency" section serves as your compass 
                in navigating the vast landscape of Inphant Api. Here, concise guidelines provide clarity on utilizing the platform effectively, ensuring a 
                seamless user experience. Understanding dependencies is key to unlocking the full potential of projects, making this section an indispensable 
                resource for users embarking on their coding journey. Whether you're a seasoned developer or a coding enthusiast, these guidelines are your 
                roadmap to harness the pulse of programming on Inphant Api.
            </p>
            <p><b>System Requirements:</b> To ensure optimal security and a seamless user experience on Inphant Api, it is crucial to meet specific browser 
                and operating system conditions. Users with the following browser versions are granted <o>green-marked</o> access.,
            </p>
            <div class="depend"><ul>
                <li><b>Google Chrome:</b> Version 112.0.5615.138 or more</li>
                <li><b>Microsoft Edge:</b> Version 110.0.1587.54 or more</li>
                <li><b>Mozilla Firefox:</b> Version 109.2.0 or more</li>
                <li><b>Opera Mini</b>: Version 67.1.2254.64861 or more</li>
                <li><b>Puffin Incognito</b>: Version 9.9.0 or more</li>
                <li><b>Vivaldi</b>: Version 5.7.2932.34 or more</li>
                <li>etc..</li>
            </ul></div>
            <p>For the best results, we recommend utilizing one of the above browsers with their specified versions. In addition to browser compatibility, the 
                user's operating system plays a vital role. Inphant Api provides <o>green-marked</o> access for the following operating systems.,
            </p>
            <div class="depend"><ul>
                <li>Windows 10: Version 1909 (Build 18363.1500)</li>
                <li>macOS Big Sur: Version 11.2.3</li>
                <li>Ubuntu: Version 20.04 LTS</li>
            </ul></div>
            <p>To ensure optimal security and the best user experience, users are encouraged to access Inphant Api using the specified browser versions 
                and operating systems listed above. Meeting these conditions guarantees a green-marked status, assuring users of a secure and enjoyable 
                coding environment.
            </p>
            <p><b>Dependencies:</b> To ensure a robust and feature-rich experience on Inphant Api, we leverage a set of essential dependencies that 
                enhance both security and user interaction. Our web platform relies on third-party links, including Bootstrap CDN, YouTube video integration, 
                Google Map links, and Google Ads, to provide a seamless and engaging user experience. In addition, Inphant Api utilizes crucial Node.js 
                framework packages such as Express.js, Mongoose for MongoDB, Nodemon for automatic server restarts, and authentication with JWT 
                (JSON Web Tokens). These dependencies play a pivotal role in maintaining the security and functionality of the platform. For users to 
                seamlessly navigate Inphant Api and access its full suite of features, it is imperative to accept and allow the usage of these dependencies. 
                Users meeting these conditions will be rewarded with a <o>green checkmark</o>, signifying a compatibility that ensures not only enhanced security 
                but also an optimized and feature-rich experience on our web platform.
            </p>
            <p><b>User Guidelines:</b> To ensure a harmonious and respectful environment for all users, we've outlined some user guidelines encompassing 
                good practices and clarifications on usage.
            </p>
            <div class="depend">
                <o>Good Practices:</o><ul>
                <li>👉🏻 Users are encouraged to download and explore any project on Inphant Api free of cost.</li>
                <li>👉🏻 Feel free to use the downloaded projects for personal or educational purposes.</li><li>
                </li><li>👉🏻 If you wish to contribute your project to Inphant Api, we welcome your submission. Your name will be prominently credited on the project.</li>
            </ul></div>
            <div class="depend">
                <o>Responsibilities:</o><ul>
                <li>👉🏻 It is crucial that users refrain from distributing or renting any downloaded projects from Inphant Api.</li>
                <li>👉🏻 Users should avoid claiming authorship or modifying Inphant Api projects outside of the platform. Responsibility for modifications 
                performed outside Inphant Api lies with the user.</li>
            </ul></div>
            <div class="depend">
               <o>Contributing Your Own Project:</o><ul>
                <li>👉🏻 Users are invited to share their own projects with Inphant Api. In such cases, the user's name will be acknowledged on the project.</li>
                <li>👉🏻 Contributions must adhere to specified conditions, including being free of cost, void of vulnerabilities, and free from any deceptive practices.</li>
            </ul></div>
            <p>By adhering to these guidelines, users contribute to maintaining a positive and collaborative atmosphere on Inphant Api. These practices are in 
                place to foster a community built on trust, respect, and the shared pursuit of knowledge and innovation.</p>
            <p></p>
            <p><b>Doubt Clean Section:</b> Within our expansive realm of Inphant Api, we've curated a dedicated <o onclick="pageRout(3);">Help page</o> designed to facilitate open communication 
                and resolve any uncertainties users may encounter. On the "Help" page, users have the opportunity to engage with us through a dynamic comment and rating 
                system. This platform allows users to ask questions, provide <o>feedback</o>, or rate our services. We value your opinions, and this system serves as a direct 
                channel for users to voice their thoughts and seek assistance. Should users harbor any doubts or queries concerning a particular project featured on our 
                platform, they are encouraged to use the comments section or reach out to us directly via email. Our email address is provided on the "Help" page, ensuring a 
                swift and personalized response to project-related inquiries.<br><br>For those who prefer a more direct approach, our company's geographical location is available 
                via Google Maps on the "Help" page. This information enables users to engage in face-to-face discussions, fostering a deeper understanding of our platform 
                and services. To streamline information and address commonly asked questions, we've included a comprehensive <o>FAQ</o> section on the "Help" page. Here, users 
                can find answers to frequently encountered queries, offering a quick reference for common concerns. Inphant Api is committed to providing a transparent 
                and user-centric environment, and the "Doubt Clean" section serves as a comprehensive resource to ensure a smooth and informed user experience.
            </p>
        </div>
    </div>
    `,
}