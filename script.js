// =====================================================
// AMBIL ELEMENT
// =====================================================

const form =
    document.getElementById("portfolioForm");

const formSection =
    document.getElementById("formSection");

const portfolioSection =
    document.getElementById("portfolioSection");


// =====================================================
// AMBIL DATA FORM
// =====================================================

function getData() {

    return {

        nama:
            document.getElementById("nama")
                .value
                .trim(),

        nis:
            document.getElementById("nis")
                .value
                .trim(),

        kelas:
            document.getElementById("kelas")
                .value
                .trim(),

        jurusan:
            document.getElementById("jurusan")
                .value
                .trim(),

        sekolah:
            document.getElementById("sekolah")
                .value
                .trim(),

        alamat:
            document.getElementById("alamat")
                .value
                .trim(),

        email:
            document.getElementById("email")
                .value
                .trim(),

        tentang:
            document.getElementById("tentang")
                .value
                .trim(),

        keahlian:
            document.getElementById("keahlian")
                .value
                .trim(),

        karya:
            document.getElementById("karya")
                .value
                .trim()

    };

}


// =====================================================
// TAMPILKAN PORTFOLIO
// =====================================================

function tampilkanPortfolio(data) {

    // HERO
    document.getElementById("displayNama")
        .textContent = data.nama;

    document.getElementById("displayJurusan")
        .textContent = data.jurusan;

    document.getElementById("displayTentang")
        .textContent = data.tentang;

    document.getElementById("displaySekolah")
        .textContent = data.sekolah;

    document.getElementById("displayKelas")
        .textContent = data.kelas;


    // AVATAR
    document.getElementById("avatarInitial")
        .textContent =
            data.nama
                .charAt(0)
                .toUpperCase();


    // PROFILE CARD
    document.getElementById("cardNama")
        .textContent = data.nama;

    document.getElementById("cardJurusan")
        .textContent = data.jurusan;

    document.getElementById("cardNis")
        .textContent = data.nis;

    document.getElementById("cardKelas")
        .textContent = data.kelas;

    document.getElementById("cardSekolah")
        .textContent = data.sekolah;


    // BIODATA
    document.getElementById("bioNama")
        .textContent = data.nama;

    document.getElementById("bioNis")
        .textContent = data.nis;

    document.getElementById("bioKelas")
        .textContent = data.kelas;

    document.getElementById("bioJurusan")
        .textContent = data.jurusan;

    document.getElementById("bioSekolah")
        .textContent = data.sekolah;

    document.getElementById("bioEmail")
        .textContent = data.email;

    document.getElementById("bioAlamat")
        .textContent = data.alamat;


    // TENTANG
    document.getElementById("aboutText")
        .textContent = data.tentang;


    // FOOTER
    document.getElementById("footerNama")
        .textContent = data.nama;

    document.getElementById("year")
        .textContent =
            new Date().getFullYear();


    // =================================================
    // KEAHLIAN
    // =================================================

    const skillsContainer =
        document.getElementById(
            "skillsContainer"
        );

    skillsContainer.innerHTML = "";


    const skills =
        data.keahlian
            .split(",")
            .map(
                skill =>
                    skill.trim()
            )
            .filter(
                skill =>
                    skill !== ""
            );


    skills.forEach(
        (skill, index) => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "skill-item";

            element.textContent =
                "✦ " + skill;

            skillsContainer
                .appendChild(element);

        }
    );


    // =================================================
    // PROJECT
    // =================================================

    const projectContainer =
        document.getElementById(
            "projectContainer"
        );

    projectContainer.innerHTML = "";


    const projects =
        data.karya
            .split(",")
            .map(
                project =>
                    project.trim()
            )
            .filter(
                project =>
                    project !== ""
            );


    projects.forEach(
        (project, index) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "project-card";


            const number =
                document.createElement(
                    "div"
                );

            number.className =
                "project-number";

            number.textContent =
                "PROJECT " +
                String(index + 1)
                    .padStart(2, "0");


            const title =
                document.createElement(
                    "h3"
                );

            title.textContent =
                project;


            const description =
                document.createElement(
                    "p"
                );

            description.textContent =
                "Karya / project siswa yang dibuat sebagai bagian dari pengembangan kemampuan dan pengalaman.";


            card.appendChild(number);

            card.appendChild(title);

            card.appendChild(description);


            projectContainer
                .appendChild(card);

        }
    );

}


// =====================================================
// SUBMIT FORM
// =====================================================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const data =
            getData();


        tampilkanPortfolio(data);


        // Simpan data
        localStorage.setItem(
            "portfolioData",
            JSON.stringify(data)
        );


        // Sembunyikan form
        formSection.style.display =
            "none";


        // Tampilkan portfolio
        portfolioSection.style.display =
            "block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =====================================================
// EDIT
// =====================================================

document
    .getElementById("editButton")
    .addEventListener(
        "click",
        function() {

            portfolioSection.style.display =
                "none";

            formSection.style.display =
                "block";


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


// =====================================================
// CETAK
// =====================================================

document
    .getElementById("printButton")
    .addEventListener(
        "click",
        function() {

            window.print();

        }
    );


// =====================================================
// EXPORT EXCEL
// =====================================================

document
    .getElementById("excelButton")
    .addEventListener(
        "click",
        function() {

            const savedData =
                localStorage.getItem(
                    "portfolioData"
                );


            if (!savedData) {

                alert(
                    "Data portfolio belum tersedia."
                );

                return;

            }


            const data =
                JSON.parse(savedData);


            const rows = [

                [
                    "DATA PORTFOLIO SISWA",
                    ""
                ],

                [
                    "Nama Lengkap",
                    data.nama
                ],

                [
                    "NIS",
                    data.nis
                ],

                [
                    "Kelas",
                    data.kelas
                ],

                [
                    "Jurusan",
                    data.jurusan
                ],

                [
                    "Sekolah",
                    data.sekolah
                ],

                [
                    "Email",
                    data.email
                ],

                [
                    "Alamat",
                    data.alamat
                ],

                [
                    "Tentang Saya",
                    data.tentang
                ],

                [
                    "",
                    ""
                ],

                [
                    "KEAHLIAN",
                    ""
                ]

            ];


            // KEAHLIAN
            const skills =
                data.keahlian
                    .split(",")
                    .map(
                        skill =>
                            skill.trim()
                    )
                    .filter(
                        skill =>
                            skill !== ""
                    );


            skills.forEach(
                (skill, index) => {

                    rows.push([
                        index + 1,
                        skill
                    ]);

                }
            );


            // PROJECT
            rows.push([
                "",
                ""
            ]);


            rows.push([
                "KARYA / PROJECT",
                ""
            ]);


            const projects =
                data.karya
                    .split(",")
                    .map(
                        project =>
                            project.trim()
                    )
                    .filter(
                        project =>
                            project !== ""
                    );


            projects.forEach(
                (project, index) => {

                    rows.push([
                        index + 1,
                        project
                    ]);

                }
            );


            // WORKSHEET
            const worksheet =
                XLSX.utils.aoa_to_sheet(
                    rows
                );


            worksheet["!cols"] = [

                {
                    wch: 30
                },

                {
                    wch: 80
                }

            ];


            // WORKBOOK
            const workbook =
                XLSX.utils.book_new();


            XLSX.utils.book_append_sheet(
                workbook,
                worksheet,
                "Portfolio"
            );


            // NAMA FILE
            const namaFile =
                data.nama
                    .replace(
                        /[^a-zA-Z0-9]/g,
                        "_"
                    );


            XLSX.writeFile(
                workbook,
                "Portfolio_" +
                namaFile +
                ".xlsx"
            );

        }
    );


// =====================================================
// LOAD DATA LOCAL STORAGE
// =====================================================

window.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedData =
            localStorage.getItem(
                "portfolioData"
            );


        if (!savedData) {
            return;
        }


        try {

            const data =
                JSON.parse(savedData);


            document.getElementById("nama")
                .value =
                    data.nama || "";


            document.getElementById("nis")
                .value =
                    data.nis || "";


            document.getElementById("kelas")
                .value =
                    data.kelas || "";


            document.getElementById("jurusan")
                .value =
                    data.jurusan || "";


            document.getElementById("sekolah")
                .value =
                    data.sekolah || "";


            document.getElementById("alamat")
                .value =
                    data.alamat || "";


            document.getElementById("email")
                .value =
                    data.email || "";


            document.getElementById("tentang")
                .value =
                    data.tentang || "";


            document.getElementById("keahlian")
                .value =
                    data.keahlian || "";


            document.getElementById("karya")
                .value =
                    data.karya || "";


            // Tampilkan otomatis
            if (
                data.nama &&
                data.nis &&
                data.kelas &&
                data.jurusan
            ) {

                tampilkanPortfolio(data);


                formSection.style.display =
                    "none";


                portfolioSection.style.display =
                    "block";

            }

        }
        catch (error) {

            console.error(
                "Gagal membaca data:",
                error
            );

        }

    }
);