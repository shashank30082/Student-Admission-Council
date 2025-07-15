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
                general: {
                    closing: 99.89
                },
                obc: {
                    closing: 99.64
                },
                sc: {
                    closing: 99.49
                },
                departments: {
                    mechanical: {
                        opening: 99.11,
                        closing: 78
                    },
                    civil: {
                        opening: 86,
                        closing: 76
                    },
                    EXTC: {
                        opening: 90,
                        closing: 80
                    },
                    IT: {
                        opening: 92,
                        closing: 82
                    },
                    computer: {
                        opening: 94,
                        closing: 84
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "INR 14.10 LPA",
                        Average: "INR 8.29 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "INR 13.40 LPA",
                        Average: "INR 7 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "INR 29.48 LPA",
                        Average: "INR 14.05 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "INR 62 LPA",
                        Average: "INR 17.06 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "INR 44.14 LPA",
                        Average: "INR 18.16 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 98.95
                    },
                    civil: {
                        opening: 86,
                        closing: 95.57
                    },
                    EXTC: {
                        opening: 90,
                        closing: 99.25
                    },
                    IT: {
                        opening: 92,
                        closing: 0
                    },
                    computer: {
                        opening: 94,
                        closing: 99.79
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 96.91
                    },
                    civil: {
                        opening: 86,
                        closing: 0
                    },
                    EXTC: {
                        opening: 90,
                        closing: 97.89
                    },
                    IT: {
                        opening: 92,
                        closing: 98.68
                    },
                    computer: {
                        opening: 94,
                        closing: 98.79
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 0
                    },
                    civil: {
                        opening: 86,
                        closing: 0
                    },
                    EXTC: {
                        opening: 90,
                        closing: 96.75
                    },
                    IT: {
                        opening: 92,
                        closing: 97.78
                    },
                    computer: {
                        opening: 94,
                        closing: 98.23
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 85.81
                    },
                    civil: {
                        opening: 86,
                        closing: 0
                    },
                    EXTC: {
                        opening: 90,
                        closing: 92.35
                    },
                    IT: {
                        opening: 92,
                        closing: 0
                    },
                    computer: {
                        opening: 94,
                        closing: 96.64
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 29.35
                    },
                    civil: {
                        opening: 86,
                        closing: 36.03
                    },
                    EXTC: {
                        opening: 90,
                        closing: 64.1
                    },
                    IT: {
                        opening: 92,
                        closing: 72.47
                    },
                    computer: {
                        opening: 94,
                        closing: 81.45
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 79.78
                    },
                    civil: {
                        opening: 86,
                        closing: 0
                    },
                    EXTC: {
                        opening: 90,
                        closing: 88.86
                    },
                    IT: {
                        opening: 92,
                        closing: 95.5
                    },
                    computer: {
                        opening: 94,
                        closing: 96.06
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
                general: {
                    opening: 95,
                    closing: 85
                },
                obc: {
                    opening: 90,
                    closing: 80
                },
                sc: {
                    opening: 85,
                    closing: 75
                },
                departments: {
                    mechanical: {
                        opening: 88,
                        closing: 46.17
                    },
                    civil: {
                        opening: 86,
                        closing: 0
                    },
                    EXTC: {
                        opening: 90,
                        closing: 0
                    },
                    IT: {
                        opening: 92,
                        closing: 79.59
                    },
                    computer: {
                        opening: 94,
                        closing: 85.62
                    }
                },
                highest_packages: {
                    mechanical: {
                        year: 2023,
                        highest: "20 LPA",
                        Average: "10 LPA"
                    },
                    civil: {
                        year: 2023,
                        highest: "18 LPA",
                        Average: "9 LPA"
                    },
                    EXTC: {
                        year: 2023,
                        highest: "19 LPA",
                        Average: "10 LPA"
                    },
                    IT: {
                        year: 2023,
                        highest: "21 LPA",
                        Average: "11 LPA"
                    },
                    computer: {
                        year: 2023,
                        highest: "22 LPA",
                        Average: "12 LPA"
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
        // Display detailed college information for the given college
        collegeInfo.innerHTML = `
            <h2>${college.name}</h2>
            <img src="${college.image}" alt="${college.name}" width="30%">
            <p><strong>Location:</strong> ${college.location}</p>
            <p><strong>Description:</strong> ${college.description}</p>
            <p><strong>Website:</strong> <a href="${college.website}" target="_blank">${college.website}</a></p>
            <table class="college-info-table">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Department</th>
                        <th>General Category</th>
                        <th>OBC Category</th>
                        <th>SC/ST Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Computer</td>
                        <td>${college.cutoffs.departments.computer.closing}</td>
                        <td>${college.cutoffs.departments.computer.closing}</td>
                        <td>${college.cutoffs.departments.computer.closing}</td>
                    </tr>
                    <!-- Repeat similar rows for other departments -->
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
                    <!-- Repeat similar rows for other departments -->
                </tbody>
            </table>
        `;
    }
    

    function displayNotFoundMessage() {
        collegeInfo.innerHTML = "<p>College not found.</p>";
    }
});
