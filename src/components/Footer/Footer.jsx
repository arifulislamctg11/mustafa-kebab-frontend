import { FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="grid lg:grid-cols-2  bg-gray-200 text-gray-700 p-10">
            <aside className="lg:w-72">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.205304311036!2d22.772322799999994!3d49.782204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7face856adfb%3A0xcca7a416a23bd4dc!2sMustafa%20Kebab%20Przemy%C5%9Bl!5e0!3m2!1sen!2sbd!4v1732221332933!5m2!1sen!2sbd"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </aside>
            <nav>
                <h6 className="footer-title">Address</h6>
                <div className="grid grid-flow-col gap-4">
                </div>
                <p> 
                     Kazimierza Wielkiego 24 , Przemyśl  ,
                     Postcode: 37-700</p>
                <p>Phone : 729 204 345</p> 
                <div className='ml-2'> <a href="tel:+729 204 345"></a><FaPhone /></div>
            </nav>
        </footer>
    );
};

export default Footer;