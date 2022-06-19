import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot } from "react-icons/bs";

const Project = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(pid)
    return (
        <div className="project-page-container">
            <section className="project-image">
                {/* <div className="img-container"> */}
                <Image
                    src="/projectImg/angularlyEcommerceFull.jpeg"
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt="kuch bhi"
                />
                {/* </div> */}
            </section>
            <section className="project-page-details">
                <div className="project-forehead">
                    <span>
                        <p className="name">Angularly Ecommerce {pid}</p>
                        <p>
                            {" "}
                            Ecommerce <BsDot /> May - June 2020
                        </p>
                    </span>

                    <Link href="/#project" passHref>
                        <a>Back to all projects</a>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Project;
