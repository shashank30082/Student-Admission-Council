document.addEventListener("DOMContentLoaded", function () {
    const collegeNameInput = document.getElementById("college-name-input");
    const searchButton = document.getElementById("search-button");
    const collegeInfo = document.getElementById("college-info");
    const collegeList = document.getElementById("college-list");

    // Sample data for colleges
    const colleges = [
        {
            name: "Veermata Jijabai Technological Institute (VJTI)",
            location: "2VC4+VCQ, H R Mahajani Rd, Matunga East, Mumbai, Maharashtra 400019",
            description: "Veermata Jijabai Technological Institute (VJTI) is a renowned engineering and technology institute located in Mumbai, India. Established in 1887, it has a rich history of providing top-quality education in various fields of engineering and technology. VJTI is known for its exceptional faculty, state-of-the-art infrastructure, and a wide range of academic programs, including undergraduate and postgraduate courses. The institute has consistently maintained a strong reputation for producing highly skilled and competent engineers who contribute significantly to the technological advancements of India. With a commitment to excellence in education and research, VJTI continues to be a prestigious institution in the field of engineering and technology in India.",
            website: "https://vjti.ac.in/",
            image: "https://images.collegedunia.com/public/college_data/images/appImage/28202_1443441209VJTI_New.jpg",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 99.89 },
                        obc: { closing: 99.64 },
                        sc: { closing: 99.49 }
                    },
                    IT: {
                        general: { closing: 99.79 },
                        obc: { closing: 99.40 },
                        sc: { closing: 97.75 }
                    },
                    EXTC: {
                        general: { closing: 99.15 },
                        obc: { closing: 98.51 },
                        sc: { closing: 76.15 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 80 },
                        obc: { closing: 75 },
                        sc: { closing: 70 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "INR 44.14 LPA",
                        Average: "INR 18.16 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "INR 62 LPA",
                        Average: "INR 17.06 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "INR 29.48 LPA",
                        Average: "INR 14.05 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "INR 13.40 LPA",
                        Average: "INR 7 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "INR 14.10 LPA	",
                        Average: "INR 8.29 LPA"
                    }
                }
            }
        },

        {
            name: "Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology (SPIT)",
            location: "Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058",
            description: "Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology (SPIT) is a distinguished engineering and technology institution located in Mumbai, India. Established in 1962, SPIT has consistently been at the forefront of technical education, offering a wide range of undergraduate, postgraduate, and doctoral programs in various engineering disciplines. The institute is known for its commitment to academic excellence and holistic development, with a strong focus on nurturing not just technical skills but also ethical values and leadership qualities in its students. SPIT boasts a dedicated and accomplished faculty, modern infrastructure, and well-equipped laboratories, ensuring that students receive a comprehensive education that aligns with the latest technological advancements. Moreover, the institute encourages research and innovation, fostering an environment where students and faculty can engage in cutting-edge projects. SPIT has a proud tradition of producing skilled engineers who have made significant contributions to the industry and society at large. With a vibrant campus life, a robust network of alumni, and strong industry connections, SPIT continues to be a premier institution in the field of engineering and technology education in India, preparing students to excel in the ever-evolving world of technology.",
            website: "https://www.spit.ac.in/",
            image: "",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 99.60 },
                        obc: { closing: 99.02 },
                        sc: { closing: 87.24 }
                    },
                    IT: {
                        general: { closing: 99.05 },
                        obc: { closing: 98.28 },
                        sc: { closing: 90.24 }
                    },
                    EXTC: {
                        general: { closing: 98.24 },
                        obc: { closing: 96.92 },
                        sc: { closing: 61.52 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 95.02 },
                        obc: { closing: 87.93 },
                        sc: { closing: 84.68 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "34 LPA",
                        Average: "18 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "30 LPA",
                        Average: "16 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "23 LPA",
                        Average: "11 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "16 LPA",
                        Average: "10.5 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "13 LPA",
                        Average: "10 LPA"
                    }
                }
            }
        },
        {
            name: "Dwarkadas J. Sanghvi College of Engineering",
            location: "No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056",
            description: "Dwarkadas J. Sanghvi College of Engineering (DJSCOE) is a distinguished engineering institution situated in Mumbai, India. Established in 1994, DJSCOE has rapidly earned a reputation for excellence in technical education. The college offers a comprehensive range of undergraduate and postgraduate programs across various engineering disciplines, providing students with a strong academic foundation and practical skills. Known for its modern infrastructure, well-equipped laboratories, and experienced faculty, DJSCOE ensures that students receive top-notch education and hands-on experience.    One of the key strengths of DJSCOE lies in its commitment to fostering innovation and research. The college encourages students and faculty to engage in research projects, enabling them to explore and address real-world challenges. This dedication to innovation has led to numerous technological advancements and contributions to various industries.",
            website: "https://www.djsce.ac.in/",
            image: "https://images.collegedunia.com/public/college_data/images/campusimage/1564468011c1.jpg",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 98.97 },
                        obc: { closing: 97.56 },
                        sc: { closing: 97.20 }
                    },
                    IT: {
                        general: { closing: 98.33 },
                        obc: { closing: 95.93 },
                        sc: { closing: 95.47 }
                    },
                    EXTC: {
                        general: { closing: 95.74 },
                        obc: { closing: 78.86 },
                        sc: { closing: 72.96 }
                    },
                    civil: {
                        general: { closing: 72.96 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 80.83 },
                        obc: { closing: 75.63 },
                        sc: { closing: 62.79 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "29 LPA",
                        Average: "18 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "28 LPA",
                        Average: "15 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "23 LPA",
                        Average: "11 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "13 LPA",
                        Average: "10.5 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "10 LPA",
                        Average: "08 LPA"
                    }
                }
            }
        },
        {
            name: "Thadomal Shahani Engineering College",
            location: "W, P. G. Kher Marg, (32nd Road, Marg, Off Linking Rd, TPS III, Bandra West, Mumbai, Maharashtra 400050",
            description: "Thadomal Shahani Engineering College (TSEC) is a renowned Mumbai-based engineering institution known for academic excellence, modern infrastructure, industry connections, research opportunities, and a strong alumni network.",
            website: "https://tsec.edu/",
            image: "https://images.collegedunia.com/public/college_data/images/campusimage/121012123246_20110515182335241_89.jpg.jpg",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 99.89 },
                        obc: { closing: 99.64 },
                        sc: { closing: 99.49 }
                    },
                    IT: {
                        general: { closing: 99.79 },
                        obc: { closing: 99.40 },
                        sc: { closing: 97.755 }
                    },
                    EXTC: {
                        general: { closing: 99.80 },
                        obc: { closing: 99.55 },
                        sc: { closing: 99.40 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 99.70 },
                        obc: { closing: 99.45 },
                        sc: { closing: 99.30 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "INR 19.63 LPA",
                        Average: "INR 14.2 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "INR 19.63 LPA",
                        Average: "INR 14.2 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "INR 8.54 LPA",
                        Average: "INR 4.5 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "INR 7.2 LPA",
                        Average: "INR 3.2 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "INR 8.2 LPA",
                        Average: "INR 4.2 LPA"
                    }
                }
            }
        },
        {
            name: "Fr. Conceicao Rodrigues College of Engineering - [CRCE]",
            location: "Fr. Agnel Ashram, Bandstand Promenade, Mount Mary, Bandra West, Mumbai, Maharashtra 400050",
            description: "Fr. Conceicao Rodrigues College of Engineering (CRCE) is a reputable engineering college located in Mumbai, India. It offers a range of undergraduate and postgraduate programs in engineering and technology. CRCE is known for its quality education, strong industry connections, and dedicated faculty. The college emphasizes both academic excellence and extracurricular activities to foster well-rounded graduates.",
            website: "https://fragnel.edu.in/",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnXj64TCwCN40j3Pi4mGNO-77YtaBPJc0-uYc7B4GFivwU4MNAWGcq_MSeA&s",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 96.10 },
                        obc: { closing: 85.86 },
                        sc: { closing: 85.02 }
                    },
                    IT: {
                        general: { closing: 0 },
                        obc: { closing: 0 },
                        sc: { closing: 0 }
                    },
                    EXTC: {
                        general: { closing: 85.31 },
                        obc: { closing: 76.10 },
                        sc: { closing: 0 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 99.70 },
                        obc: { closing: 99.45 },
                        sc: { closing: 99.30 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "INR 25 LPA",
                        Average: "INR 11.2 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "INR 19 LPA",
                        Average: "INR 8.1 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "INR 15.8 LPA",
                        Average: "INR 7.5 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "INR 8 LPA",
                        Average: "INR 4 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "INR 8.3 LPA",
                        Average: "INR 5 LPA"
                    }
                }
            }
        },
        {
            name: "Vidyavardhini's College of Engineering and Technology - [VCET]",
            location: "K.T. Marg, Vartak College Campus Vasai Road, Vasai-Virar, Maharashtra 401202",
            description: "Vidyavardhini's College of Engineering and Technology (VCET) is a Mumbai-based institution known for its quality technical education. It offers various engineering programs, has a modern campus, experienced faculty, promotes research, and facilitates industry interactions for students.",
            website: "https://vcet.edu.in/",
            image: "https://lh3.googleusercontent.com/p/AF1QipM2zuPa6zuO9VywftctKX0xO4r8X37D8lQvY1TS=s1360-w1360-h1020",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 99.89 },
                        obc: { closing: 99.64 },
                        sc: { closing: 99.49 }
                    },
                    IT: {
                        general: { closing: 99.79 },
                        obc: { closing: 99.40 },
                        sc: { closing: 97.755 }
                    },
                    EXTC: {
                        general: { closing: 99.80 },
                        obc: { closing: 99.55 },
                        sc: { closing: 99.40 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 99.70 },
                        obc: { closing: 99.45 },
                        sc: { closing: 99.30 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "INR 17 LPA",
                        Average: "INR 8.5 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "INR 11.54 LPA",
                        Average: "INR 7.5 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "INR 7.2 LPA",
                        Average: "INR 4 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "INR 3.24 LPA",
                        Average: "INR 2.8 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "INR 6 LPA",
                        Average: "INR 3.7 LPA"
                    }
                }
            }
        },
        {
            name: "St. Francis Institute of Technology - [SFIT]",
            location: "Sardar Vallabhbhai Patel Rd, near Bhagwati hospital, Mount Poinsur, Borivali West, Mumbai, Maharashtra 400103",
            description: "St. Francis Institute of Technology (SFIT) is an educational institution located in Mumbai, India. It is known for offering a range of technical and engineering programs. SFIT boasts modern facilities, a dedicated faculty, and a focus on practical learning through industry collaborations.",
            website: "https://www.sfit.ac.in/",
            image: "https://theacademicinsights.com/wp-content/uploads/2021/07/St.-Francis-Institute-of-Technology-draft-engg-survey-2021.jpg",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 99.89 },
                        obc: { closing: 99.64 },
                        sc: { closing: 99.49 }
                    },
                    IT: {
                        general: { closing: 99.79 },
                        obc: { closing: 99.40 },
                        sc: { closing: 97.755 }
                    },
                    EXTC: {
                        general: { closing: 99.80 },
                        obc: { closing: 99.55 },
                        sc: { closing: 99.40 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 99.70 },
                        obc: { closing: 99.45 },
                        sc: { closing: 99.30 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "INR 13 LPA",
                        Average: "INR 5.5 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "INR 8 LPA",
                        Average: "INR 5.1 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "INR 7.2 LPA",
                        Average: "INR 5 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "INR 6 LPA",
                        Average: "INR 3.24 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "INR 6.8 LPA",
                        Average: "INR 4 LPA"
                    }
                }
            }
        },
        {
            name: " St. John College of Engineering and Management - [SJCEM]",
            location: "Palghar - Manor Rd, near Shakti Udyog, Industrial Area, Vevoor, Palghar, Maharashtra 401404",
            description: "St. John College of Engineering and Management (SJCEM) is an educational institution located in Mumbai, India. It offers engineering and management programs. SJCEM is known for its modern campus, experienced faculty, and a commitment to providing a well-rounded education to its students.",
            website: "https://www.sjcem.edu.in/",
            image: "https://storage.googleapis.com/ezap-prod/colleges/1863/st-john-college-image.jpg",
            cutoffs: {
                departments: {
                    computer: {
                        general: { closing: 99.89 },
                        obc: { closing: 99.64 },
                        sc: { closing: 99.49 }
                    },
                    IT: {
                        general: { closing: 99.85 },
                        obc: { closing: 99.60 },
                        sc: { closing: 99.45 }
                    },
                    EXTC: {
                        general: { closing: 99.80 },
                        obc: { closing: 99.55 },
                        sc: { closing: 99.40 }
                    },
                    civil: {
                        general: { closing: 99.75 },
                        obc: { closing: 99.50 },
                        sc: { closing: 99.35 }
                    },
                    mechanical: {
                        general: { closing: 99.70 },
                        obc: { closing: 99.45 },
                        sc: { closing: 99.30 }
                    }
                },
                highest_packages: {
                    computer: {
                        year: "2023",
                        highest: "INR 10 LPA",
                        Average: "INR 5.9 LPA"
                    },
                    IT: {
                        year: "2023",
                        highest: "INR 8 LPA",
                        Average: "INR 5.1 LPA"
                    },
                    EXTC: {
                        year: "2023",
                        highest: "INR 5.54 LPA",
                        Average: "INR 3.24 LPA"
                    },
                    civil: {
                        year: "2023",
                        highest: "INR 4.7 LPA",
                        Average: "INR 3.2 LPA"
                    },
                    mechanical: {
                        year: "2023",
                        highest: "INR 4.12 LPA",
                        Average: "INR 3.4 LPA"
                    

                    }
                }
            }
        },
    ];

    collegeNameInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            searchCollege(collegeNameInput.value.trim());
        }
    });

    searchButton.addEventListener("click", function () {
        const collegeName = collegeNameInput.value.trim();
        if (collegeName) {
            searchCollege(collegeName);
        }
    });

    collegeNameInput.addEventListener("input", function () {
        const collegeName = collegeNameInput.value.trim();
        searchColleges(collegeName);
    });

    function searchColleges(query) {
        const filteredColleges = colleges.filter(college =>
            college.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredColleges.length > 0) {
            displayCollegeList(filteredColleges);
            collegeInfo.innerHTML = "";
        } else {
            displayNotFoundMessage();
        }
    }

    function displayCollegeList(colleges) {
        collegeList.innerHTML = "";
        colleges.forEach(college => {
            const listItem = document.createElement("li");
            listItem.textContent = college.name;
            listItem.addEventListener("click", function () {
                displayCollegeInfo(college);
            });
            collegeList.appendChild(listItem);
        });
    }

    function searchCollege(name) {
        const college = colleges.find(college => college.name.toLowerCase() === name.toLowerCase());

        if (college) {
            displayCollegeInfo(college);
        } else {
            displayNotFoundMessage();
        }
    }

    function displayCollegeInfo(college) {
        // Display detailed college information
        collegeInfo.innerHTML = `
        <h2>${college.name}</h2>
        <img src="${college.image}" alt="${college.name}" width="30%">
        <p><strong>Location:</strong> ${college.location}</p>
        <p><strong>Description:</strong> ${college.description}</p>
        <p><strong>Website:</strong> <a href="${college.website}" target="_blank">${college.website}</a></p>

        <h3>Cutoffs</h3>
        <table class="college-info-table">
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Department</th>
                    <th>General Category</th>
                    <th>OBC Category</th>
                    <th>SC Category</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                <td>1</td>
                <td>Computer</td>
                <td> ${college.cutoffs.departments.computer.general.closing}</td>
                <td> ${college.cutoffs.departments.computer.obc.closing}</td>
                <td> ${college.cutoffs.departments.computer.sc.closing}</td>

                    </tr>
                    <tr>
                    <td>2</td>
                    <td>IT</td>
                    <td> ${college.cutoffs.departments.IT.general.closing}</td>
                    <td> ${college.cutoffs.departments.IT.obc.closing}</td>
                    <td> ${college.cutoffs.departments.IT.sc.closing}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>EXTC</td>
                    <td> ${college.cutoffs.departments.EXTC.general.closing}</td>
                    <td>${college.cutoffs.departments.EXTC.obc.closing}</td>
                    <td> ${college.cutoffs.departments.EXTC.sc.closing}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Civil</td>
                    <td> ${college.cutoffs.departments.civil.general.closing}</td>
                    <td> ${college.cutoffs.departments.civil.obc.closing}</td>
                    <td> ${college.cutoffs.departments.civil.sc.closing}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Mechanical</td>
                    <td> ${college.cutoffs.departments.mechanical.general.closing}</td>
                    <td> ${college.cutoffs.departments.mechanical.obc.closing}</td>
                    <td> ${college.cutoffs.departments.mechanical.sc.closing}</td>
                </tr>
            </tbody>
        </table>

            <table class="highest-packages-table">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>Highest Package</th>
                        <th>Average Package</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>

                        <td>Computer</td>
                        <td>${college.cutoffs.highest_packages.computer.year}</td>
                        <td>${college.cutoffs.highest_packages.computer.highest}</td>
                        <td>${college.cutoffs.highest_packages.computer.Average}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>IT</td>
                        <td>${college.cutoffs.highest_packages.IT.year}</td>
                        <td>${college.cutoffs.highest_packages.IT.highest}</td>
                        <td>${college.cutoffs.highest_packages.IT.Average}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>EXTC</td>
                        <td>${college.cutoffs.highest_packages.EXTC.year}</td>
                        <td>${college.cutoffs.highest_packages.EXTC.highest}</td>
                        <td>${college.cutoffs.highest_packages.EXTC.Average}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Civil</td>
                        <td>${college.cutoffs.highest_packages.civil.year}</td>
                        <td>${college.cutoffs.highest_packages.civil.highest}</td>
                        <td>${college.cutoffs.highest_packages.civil.Average}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mechanical</td>
                        <td>${college.cutoffs.highest_packages.mechanical.year}</td>
                        <td>${college.cutoffs.highest_packages.mechanical.highest}</td>
                        <td>${college.cutoffs.highest_packages.mechanical.Average}</td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    function displayNotFoundMessage() {
        collegeInfo.innerHTML = "<p>College not found.</p>";
    }
});
