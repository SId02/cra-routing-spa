import React from "react";
import web from "./assets/img/homepgImg.svg";
import Common from "./Common";
const Home = () => {
	return (
		<>
			<Common
				name="Grow your business with "
				imgsrc={web}
				visit="/service"
				btnname="Get Started "
			/>

			{/* <section id="header" className="d-flex align-items-center">
				<div className="container-fluid nav_bg">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
									<h1>
										Grow your business with{" "}
										<strong className="brand-name">bs5</strong>
									</h1>
									<h2 className="my-3">we are the team of dev making app</h2>
									<div className="mt-3">
										<NavLink to="/service" className="btn-get-started">
											Get Started
										</NavLink>
									</div>
								</div>
								<div className="col-md-6  order-1 order-lg-2 header-img">
									<img
										src={web}
										alt=" image one"
										className="img-fluid animated"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default Home;
