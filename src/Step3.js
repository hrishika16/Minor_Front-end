import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./css/step3.css";
let arra = [];

function Step3() {
	const [toAnother, settoAnother] = useState(false);
	const [Exploratory, setExploratory] = useState("Exploratory");
	const [Philosophy, setPhilosophy] = useState("Philosophy");
	const [BioTechnology, setBioTechnology] = useState("BioTechnology");
	const [Technology, setTechnology] = useState("Technology");
	const [Journalism, setJournalism] = useState("Journalism");
	const [Enterprenuralism, setEnterprenuralism] = useState("Enterprenuralism");
	const [Health_Sciences, setHealth_Sciences] = useState("Health Sciences");

	const [Data_Science, setData_Science] = useState("Data Science");
	const [Behavioral_Science, setBehavioral_Science] =
		useState("Behavioral Science");
	const [Marketing_Sales, setMarketing_Sales] = useState("Marketing & Sales");
	const [Creative_Writing, setCreative_Writing] = useState("Creative Writing");
	const [Art_Culture, setArt_Culture] = useState("Art Culture");
	const [Public_Service, setPublic_Service] = useState("Public Service");
	const [Design_Animation, setDesign_Animation] = useState("Design/Animation");
	const [Financial_Analys, setFinancial_Analys] = useState("Financial Analys");

	const handleSubmitBtn = () => {
		const mail = localStorage.getItem("emailOfUser");
		if (arra.length === null) {
			console.log("Atleast select 1 field");
		} else {
			axios({
				method: "post",
				url: "http://localhost:3001/interests",
				headers: {
					AuthKey: "asdfgh"
				},
				data: {
					email: mail,
					interests: arra
				}
			})
				.then((res) => {
					console.log(res);
					if (res.data.status === 200) {
						console.log(res);
						settoAnother(true);
					} else if (res.data.status === 202) {
						console.log(res.data.message);
					} else {
						console.log(res.data.message);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	if (toAnother) {
		return (
			<Redirect
				to={{
					pathname: "/dashboard"
				}}
			/>
		);
	}

	const handleButtonClick = (event) => {
		switch (event.target.id) {
			case "Exploratory":
				setExploratory(event.target.id);
				break;
			case "Philosophy":
				setPhilosophy(event.target.id);
				break;
			case "BioTechnology":
				setBioTechnology(event.target.id);
				break;
			case "Technology":
				setTechnology(event.target.id);
				break;
			case "Journalism":
				setJournalism(event.target.id);
				break;
			case "Enterprenuralism":
				setEnterprenuralism(event.target.id);
				break;
			case "Health Sciences":
				setHealth_Sciences(event.target.id);
				break;
			case "Data Sciences":
				setData_Science(event.target.id);
				break;

			case "Behavioral Science":
				setBehavioral_Science(event.target.id);
				break;
			case "Marketing & Sales":
				setMarketing_Sales(event.target.id);
				break;
			case "Creative Writing":
				setCreative_Writing(event.target.id);
				break;
			case "Art Culture":
				setArt_Culture(event.target.id);
				break;
			case "Public Service":
				setPublic_Service(event.target.id);
				break;
			case "Design/Animation":
				setDesign_Animation(event.target.id);
				break;
			case "Financial Analys":
				setFinancial_Analys(event.target.id);
				break;
		}
		arra.push(event.target.id);
		console.log(arra);
	};

	return (
		<div>
			<center>
				<h2 className="selectHeading">Select Your Interest</h2>
				<br></br>

				<div className="container wholeInterest">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12 btnInterest">
							<input
								type="button"
								value={Exploratory}
								name="Exploratory"
								id="Exploratory"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value="b1"
								name="b1"
								id="Exploratory"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Philosophy}
								name="Philosophy"
								id="Philosophy"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={BioTechnology}
								name="BioTechnology"
								id="BioTechnology"
								onClick={(e) => handleButtonClick(e)}
							/>
						</div>
						<div className="col-lg-3 col-md-6 col-12 btnInterest">
							<input
								type="button"
								value={Technology}
								name="Technology"
								id="Technology"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Journalism}
								name="Journalism"
								id="Journalism"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Enterprenuralism}
								name="Enterprenuralism"
								id="Enterprenuralism"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Health_Sciences}
								name="Health_Sciences"
								id="Health_Sciences"
								onClick={(e) => handleButtonClick(e)}
							/>
						</div>
						<div className="col-lg-3 col-md-6 col-12 btnInterest">
							<input
								type="button"
								value={Data_Science}
								name="Data_Science"
								id="Data_Science"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Behavioral_Science}
								name="Behavioral_Science"
								id="Behavioral_Science"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Marketing_Sales}
								name="Marketing_Sales"
								id="Marketing_Sales"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Creative_Writing}
								name="Creative_Writing"
								id="Creative_Writing"
								onClick={(e) => handleButtonClick(e)}
							/>
						</div>
						<div className="col-lg-3 col-md-6 col-12 btnInterest">
							<input
								type="button"
								value={Art_Culture}
								name="Art_Culture"
								id="Art_Culture"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Public_Service}
								name="Public_Service"
								id="Public_Service"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Design_Animation}
								name="Design_Animation"
								id="Design_Animation"
								onClick={(e) => handleButtonClick(e)}
							/>
							<br></br>
							<input
								type="button"
								value={Financial_Analys}
								name="Financial_Analys"
								id="Financial_Analys"
								onClick={(e) => handleButtonClick(e)}
							/>
						</div>
					</div>
				</div>

				<div className="fieldDiv">
					<h4 className="enterDetails">Enter any other Interest </h4>
					<br></br>
					<input
						type="text"
						placeholder="Type here..."
						className="fieldInput"></input>
					<button className="add_btn_step3">+</button>
					<br></br>
					<button
						type="btn"
						className="submitBtnStep"
						onClick={handleSubmitBtn}>
						Submit
					</button>
					<br></br>
					<h4 className="errorCategory error">
						Please select atleast 3 categories{" "}
					</h4>
				</div>
			</center>
		</div>
	);
}

export default Step3;

