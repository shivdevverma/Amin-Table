import React, { useState } from "react";

const Home = () => {

    const initialData = [
        {
            id: 1,
            username: "shivverma",
            phone: 9876563423,
            designation: "Software Engineer",
            Userid: "shiv123",
            status: "active"
        },
        {
            id: 2,
            username: "rahulsingh",
            phone: 8876563400,
            designation: "Software trainee",
            Userid: "rahul190",
            status: "inactive"
        },
        {
            id: 3,
            username: "satyamdwivedi",
            phone: 7656342311,
            designation: "Software Developer",
            Userid: "satyam175",
            status: "active"
        },
        {
            id: 4,
            username: "rohitmishra",
            phone: 6656342367,
            designation: "Software Tester",
            Userid: "satyam165",
            status: "inactive"
        },

        {
            id: 5,
            username: "amitsingh",
            phone: 7890543412,
            designation: "Manager",
            Userid: "palan443",
            status: "active"
        },
    ]

    const [searchValue, setSearchValue] = useState();

    let textInput = React.createRef();

    function handleSearchClick(e) {
        setSearchValue(textInput.current.value);
    }

    const [data, setData] = useState(initialData);
    const [option, setOption] = useState()
    function handleChange(event) {
        const selectValue = event.target.value;
        setOption(selectValue);
    }


    function handleReset(e) {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className="container">
            <div className='tabledata'>
                <div className="row toprow">
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="form-outline" data-mdb-input-init>
                                <input type="search" className="form-control"
                                    placeholder="Enter Username..."
                                    ref={textInput}
                                />
                            </div>
                            <button type="button" className="btn btn-primary"
                                onClick={handleSearchClick}>Search</button>

                        </div>
                    </div>
                    <div className="col-sm-5">
                        <select className="form-select"
                            onChange={handleChange} >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="row restrow pb-3" >
                    <div className="col-md-12">
                        <button type="button" className="btn btn-sm  btn-primary"
                            onClick={handleReset}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
                                <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.8 6.8 0 0 0 1.16 8z" />
                                <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324z" />
                            </svg> Clear Filter</span>
                        </button>

                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Sr.</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Designation</th>
                            <th scope="col">User Id</th>
                            <th scope="col">Access Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.filter(item => (!option || item.status === option) && (!searchValue || item.username.includes(searchValue))).map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.Userid}</td>
                                    <td>
                                        <button type="button" className={`statusbtn btn btn-sm  btn-${item.status == "active" ? 'primary' : 'danger'}`}>{item.status}</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
