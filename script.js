let elements=[
    {
        id:1,
        image:"./assets/FB_IMG_1652607151685.jpg",
        name: 'Sandeep Kumar',
        job: "Frontend Developer",
        tittle: " As a frontend developer is a proficient artisan of user interfaces, crafting digital experiences with precision and creativity. Armed with a keen eye for design and a mastery of HTML, CSS, and JavaScript, they sculpt seamless interactions that captivate and engage users, bringing your visions to life with finesse.",
    },{
        id:2,
        image:"./assets/IMG_20210203_044127-01.jpeg",
        name:'Sandeep Kumar',
        job:'Backend Development',
        tittle:'Backend skills involve proficiency in server-side programming languages like Python, Java, or Node.js, along with frameworks such as Django, Spring, or Express.js. Knowledge of databases (SQL and NoSQL), APIs, and server management is crucial. Additionally, understanding of security, scalability, and performance optimization is essential for robust backend development.'
    },
    {
        id:3,
        image:'./assets/IMG20210101165430.jpg',
        name:'Sandeep Kumar',
        job:"Excel Data Analyzer",
        tittle:"Excel data analysis encompasses utilizing Excel's features for processing and interpreting data. Tasks include organizing, sorting, filtering, and summarizing data using functions like VLOOKUP, SUMIF, and PivotTables. Additionally, statistical analysis, chart creation, and data visualization are common techniques employed for deriving insights and making informed decisions."
    },
    {
        id:4,
        image:"./assets/IMG20211216201102-01.jpeg",
        name:"Sandeep Kumar",
        job:"Web Designer",
        tittle:"Your web designer skills encompass expertise in UI/UX design principles, graphic design software like Adobe XD or Sketch, and proficiency in HTML, CSS, and JavaScript. Your keen eye for aesthetics, usability, and responsiveness enables you to craft visually appealing and user-friendly websites that meet client needs and industry standards."
    }
];

const image_con=document.getElementById('image');
const heading=document.getElementById("heading");
const semi_heading=document.getElementById("semi_heading");
const text=document.getElementById("text");
const previews_btn=document.getElementById("button_arrow_left");
const next_btn=document.getElementById("button_arrow_right");

let countdown=0;

window.addEventListener('DOMContentLoaded', ()=>{
    let content=elements[countdown];
    image_con.src=content.image;
    heading.textContent=content.name;
    semi_heading.textContent=content.job;
    text.textContent=content.tittle;
});

function ShowContent(Shown_content){
    const content=elements[Shown_content];
    image_con.src=content.image;
    heading.textContent=content.name;
    semi_heading.textContent=content.job;
    text.textContent=content.tittle;
}