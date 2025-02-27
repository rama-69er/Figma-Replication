import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/blog.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const blog = [{
    id: 1,
    imgUrl: "https://www.penboutique.com/cdn/shop/articles/Improving_Poor_Handwriting_with_a_Pen.jpg?v=1607847512",
    para1Span1: "Ramanand Dubey",
    para1Span2: "21 June, 2001",
    heading: "Small Business & Startup",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere.",
    span1: "Lorem & Ipsum",
    span2: "Amet & Set",
}, {
    id: 2,
    imgUrl: "https://zenkit.com/wp-content/uploads/2018/10/team-meeting-1.jpeg",
    para1Span1: "Ramanand Dubey",
    para1Span2: "21 June, 2001",
    heading: "Scale-Up Company Offer",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere.",
    span1: "Lorem & Ipsum",
    span2: "Amet & Set",
}, {
    id: 3,
    imgUrl: "https://www.designoffices.de/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9mt55bm0937w%2F2p8uqXmuVCs4wsuJqkrQjr%2Ff3184b9ac7e65f091660802e264e520b%2FKey_Visual_Office_Spaces_Nuernberg_City_Flexible_Office_1.jpg&w=3840&q=75",
    para1Span1: "Ramanand Dubey",
    para1Span2: "21 June, 2001",
    heading: "Growing Business Package",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere.",
    span1: "Lorem & Ipsum",
    span2: "Amet & Set",
}, {
    id: 4,
    imgUrl: "https://img.freepik.com/premium-photo/colorful-sticky-notes-with-things-office-board-user-experience-ux-concept_1418-2180.jpg",
    para1Span1: "Ramanand Dubey",
    para1Span2: "21 June, 2001",
    heading: "Scale-Up Company Offer",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere.",
    span1: "Lorem & Ipsum",
    span2: "Amet & Set",
}, {
    id: 5,
    imgUrl: "https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg=",
    para1Span1: "Ramanand Dubey",
    para1Span2: "21 June, 2001",
    heading: "Small Business & Startup",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere.",
    span1: "Lorem & Ipsum",
    span2: "Amet & Set",
}, {
    id: 6,
    imgUrl: "https://www.shutterstock.com/image-photo/millennial-teacher-giving-online-lesson-600nw-1907004886.jpg",
    para1Span1: "Ramanand Dubey",
    para1Span2: "21 June, 2001",
    heading: "Scale-Up Company Offer",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere.",
    span1: "Lorem & Ipsum",
    span2: "Amet & Set",
}
]

function Blog() {
    return (
        <div className="blogPage">
            <div>
                <p>Explore Our Blogs</p>
                <h2>Accelerate Digital Transformation</h2>
            </div>
            <div className="row">
                {blog.map((data) =>
                    <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">
                        <div className="blogCards">
                            <img src={data.imgUrl} alt="err_img" />
                            <div className="py-2">
                                <p>
                                    <span>{data.para1Span1}</span> &#9679; <span>{data.para1Span2}</span>
                                </p>
                                <h4>{data.heading} <FontAwesomeIcon icon={faArrowRight} /></h4>
                                <p>{data.para2}</p>
                                <span>{data.span1}</span>
                                <span>{data.span2}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button className="theme-btn">Show more blogs &#11157;</button>
        </div>
    )
}

export default Blog;