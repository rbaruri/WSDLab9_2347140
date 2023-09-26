import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedBook: "",
    review: "",
  });

  const [displayedFormData, setDisplayedFormData] = useState({
    name: "",
    email: "",
    selectedBook: "",
    review: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    setDisplayedFormData({ ...formData });
  };

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
      setDisplayedFormData(storedFormData);
    }
  }, []);

  const handleBookSelection = (book) => {
    setFormData({ ...formData, selectedBook: book });
    setIsDropdownOpen(false);
  };

  return (
    <>
      <br />
      <h1
        className="mb-5 text-5xl font-bold font-abc text-center"
        style={{ color: "black", paddingTop: "20px" }}
      >
        Bookish Delights
      </h1>
      <p className="mb-5 text-2xl font-normal text-center" 
        style={{ color: "black", paddingTop: "0px" }}>Review Form</p>
      <br></br>
      <div className="form-cont">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Please enter your name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name: "
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label className="label"></label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter your Email-Id</span>
          </label>
          <input
            type="text"
            placeholder="example@mail.com"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label className="label"></label>
        </div>
        <label className="label">
          <span className="label-text">Select a Book 🔽</span>
        </label>
        <div style={{ textAlign: "left" }}>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn s-1">
              {formData.selectedBook ? formData.selectedBook : "Select a Book"}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "Atomic Habits",
                    })
                  }
                >
                  Atomic Habits
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "Gone with the Wind",
                    })
                  }
                >
                  Gone with the Wind
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({ ...formData, selectedBook: "1984" })
                  }
                >
                  1984
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "Othello",
                    })
                  }
                >
                  Othello
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "The Catcher in the Rye",
                    })
                  }
                >
                  The Catcher in the Rye
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "Pride and Prejudice",
                    })
                  }
                >
                  Pride and Prejudice
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "The Lord of the Rings",
                    })
                  }
                >
                  The Lord of the Rings
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedBook: "To Kill a Mockingbird",
                    })
                  }
                >
                  To Kill a Mockingbird
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Review</span>
          </label>
          <textarea
            className="textarea textarea-accent"
            placeholder="Write Review here"
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
          ></textarea>
        </div>
      
      <div style={{ textAlign: "center"}}>
        <input
          type="submit"
          value="Submit"
          className="btn"
          id="submit"
          onClick={handleSubmit}
        />
      </div>
      </div>
      <div
        className="bg-base-100 text-bg-neutral-content"
        style={{ color: "black", padding: "20px" }}
      >
        <h1 style={{ color: "black", fontWeight: "bolder" }}>
          -------REVIEW DETAILS-------
        </h1>
        <p>
          <strong>Name:</strong> {displayedFormData.name}
        </p>
        <p>
          <strong>Email:</strong> {displayedFormData.email}
        </p>
        <p>
          <strong>Book:</strong> {displayedFormData.selectedBook}
        </p>
        <p>
          <strong>Review:</strong> {displayedFormData.review}
        </p>
      </div>
    </>
  );
}

export default App;
