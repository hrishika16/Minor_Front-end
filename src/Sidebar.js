import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css";
import userIcon from "./img/userIcon.svg";
import syncIn from "./img/logo.png";
import userProf from "./img/userProf.png";
import chat from "./img/chat.png";
import story from "./img/cardbox.png";
import post from "./img/post.png";
import yourStroy from "./img/yourStroy.png";
import axios from "axios";
import notif from "./img/notif2.png";

function Sidebar() {
	return (
		<div className="cside">
			<div className="sidebard">
				{/* User icon */}
				<div>
					<center>
						<img src={userIcon} alt="user Icon" className="userImg" />
					</center>
				</div>
				<br />
				<div className="sidess_11">
					<img src={userProf} alt="user icon" className="side_img" />
					<Link to="/aboutUser" className="linkss_12">
						Profile
					</Link>
				</div>
				<div className="sidess_11">
					<img src={chat} alt="user icon" className="side_img" />
					<button className="linkss_11">Chat Screen</button>
				</div>
				<div className="sidess_11">
					<img src={story} alt="user icon" className="side_img" />
					<Link to="/hiring" className="linkss_12">
						Hiring
					</Link>
				</div>
				<div className="sidess_11">
					<img src={yourStroy} alt="user icon" className="side_img" />
					{/* successStory */}
					<Link to="/successStory" className="linkss_12">
						Success Story
					</Link>
				</div>
				<div className="sidess_11">
					<img src={notif} className="side_img"></img>
					<button className="linkss_11">Notifications</button>
				</div>
				<div className="sidess_11">
					<button
						className="addStory"
						data-toggle="modal"
						data-target="#exampleAddPost">
						{" "}
						+ Add Post{" "}
					</button>
				</div>
			</div>
			{/* Phone sidebar */}
			<div className="sidebarpp">
				<nav id="sidebarp" className="sidebarPhone">
					{/* Profile */}
					<div className="sidess_11">
						<img src={userProf} alt="user icon" className="side_img" />
						<Link to="/aboutUser" className="linkss_12">
							Profile
						</Link>
					</div>
					{/* legal updates */}
					<div className="sidess_11">
						<img src={chat} alt="user icon" className="side_img" />
						<button className="linkss_11">Chat Screen</button>
					</div>
					<div className="sidess_11">
						<img src={story} alt="user icon" className="side_img" />
						<Link to="/hiring" className="linkss_12">
							Hiring
						</Link>
					</div>
					<div className="sidess_11">
						<img src={yourStroy} alt="user icon" className="side_img" />
						{/* successStory */}
						<Link to="/successStory" className="linkss_12">
							Success Story
						</Link>
					</div>
					<div className="sidess_11">
						<img src={notif} className="side_img"></img>
						<button className="linkss_11">Notifications</button>
					</div>
					<div className="sidess_11">
						<button
							className="addStory"
							data-toggle="modal"
							data-target="#exampleAddPost">
							{" "}
							+ Add Post{" "}
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Sidebar;
