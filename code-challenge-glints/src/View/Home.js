import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user-actions';
// import { Container, Card, CardBody, Button } from 'reactstrap';
import { Grid, Col } from 'react-bootstrap';
const onlyNumber = /^[0-9\b]+$/;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valCompanyName: false,
            valCompanyAddress: false,
            valCompanyRevenue: false,
            valCompanyPhone: false,
            valCompanyPhoneNo: false,
            valCompanyPhoneCode: false,
            // Companies dummy data
            Companies: [
                {
                    name: 'Google',
                    address: '1600 Amphitheatre Parkway Mountain View CA 94043 USA',
                    revenue: '9999999',
                    phoneCode: '190',
                    phoneNo: '123456789',
                    office: [
                        {

                        }
                    ]
                },
                {
                    name: 'Amazon',
                    address: '410 Terry Ave. North Seattle WA 98109',
                    revenue: '9999999',
                    phoneCode: '206',
                    phoneNo: '266-1000'
                },
                {
                    name: 'Alibaba',
                    address: '989 West Wen Yi Road Yu Hang District Hangzhou 311121',
                    revenue: '9999999',
                    phoneCode: '86',
                    phoneNo: '571-8502-2088'
                }
            ]
        }

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
    }

    createCompanyHandler() {
        var stat = true;
        if (!this.state.companyName) {
            this.setState({ valCompanyName: true });
            stat = false;
        }
        if (!this.state.companyAddress) {
            this.setState({ valCompanyAddress: true });
            stat = false;
        }
        if (!this.state.companyRevenue) {
            this.setState({ valCompanyRevenue: true });
            stat = false;
        }
        if (!this.state.companyPhoneNo || !this.state.companyPhoneCode) {
            this.setState({ valCompanyPhone: true });
            stat = false;
            if (!this.state.companyPhoneNo) {
                this.setState({ valCompanyPhoneNo: true });
            }
            if (!this.state.companyPhoneCode) {
                this.setState({ valCompanyPhoneCode: true });
            }
        }

        if (stat) {
            let data = {
                name: this.state.companyName,
                address: this.state.companyAddress,
                revenue: this.state.companyRevenue,
                phoneCode: this.state.companyPhoneCode,
                phoneNo: this.state.companyPhoneNo
            }
            this.state.Companies.push(data);
            this.setState({
                companyName: '', companyAddress: '', companyRevenue: '', companyPhoneCode: '', companyPhoneNo: ''
            });
            console.log(this.state.Companies)
        }
    }

    number1(val) {
        if (!onlyNumber.test(val)) {
            alert('a')
        }
        else {
            alert('x')

        }
    }

    number2(val) {
        if (!onlyNumber.test(val)) {
            return false
        }
    }

    removeCompanies(data) {
        var toRemove = data;
        var arrayData = this.state.Companies;
        var index = arrayData.indexOf(toRemove);
        arrayData.splice(index, 1);
        console.log(this.state.Companies);
        this.setState({Companies : arrayData});
    }

    render() {
        return (
            <Grid>
                <div className="App">
                    <input onChange={this.onUpdateUser} />
                    {this.props.user}
                </div>
                <div style={{ width: '100%', border: '1px solid #CCCCCC' }}>
                    <div className="half-box onRight">
                        <span className="form-label">
                            Create Office
                        </span>
                        <span>Name : </span>
                        <input
                            className="form-control"
                            style={{ width: '100%', marginBottom: '10px' }}
                            placeholder="company name"
                            value={this.state.officeName}
                        />
                        <span>Location : </span>
                        <div style={{ width: '100%', marginBottom: '10px' }}>
                            <input className="form-control" style={{ width: 'calc(50% - 5px)', float: 'right' }} placeholder="Longitude" />
                            <input className="form-control" style={{ width: 'calc(50% - 5px)' }} placeholder="Latitude" />
                        </div>
                        <span>Office start date : </span>
                        <input type="date" className="form-control" style={{ width: '100%', marginBottom: '10px' }} />
                        <span>Company : </span>
                        <select className="form-control" style={{ width: '100%', marginBottom: '10px' }}>
                            <option selected disabled>Choose company</option>
                            {this.state.Companies.map((option, index) => {
                                return (
                                    <option >{option.name}</option>
                                )
                            })}
                        </select>
                        <button onClick={()=> this.testhapus()} style={{ width: '100%', marginBottom: '10px' }} type="button" class="btn btn-default">Create</button>
                    </div>
                    <div className="half-box">
                        <span className="form-label">
                            Create Company
                        </span>
                        <span>Name : </span>
                        <input
                            className="form-control"
                            placeholder="company name"
                            value={this.state.companyName}
                            onChange={(e) => {
                                this.setState({ companyName: e.target.value });
                                if (e.target.value.length > 0) {
                                    this.setState({ valCompanyName: false })
                                }
                            }}
                            style={this.state.valCompanyName ?
                                { border: '1px solid red', width: '100%' }
                                :
                                { border: '1px solid #ccc', width: '100%' }
                            }
                        />
                        <span style={this.state.valCompanyName ? { color: '#F86C6B', width: '100%', fontSize: '80%', display: 'inline-block' } : { visibility: 'collapse', width: '100%', display: 'inline-block' }}>*Company's name required</span>
                        <span>Address : </span>
                        <input
                            className="form-control"
                            placeholder="company address"
                            onChange={(e) => {
                                this.setState({ companyAddress: e.target.value });
                                if (e.target.value.length > 0) {
                                    this.setState({ valCompanyAddress: false })
                                }
                            }}
                            style={this.state.valCompanyAddress ?
                                { border: '1px solid red', width: '100%' }
                                :
                                { border: '1px solid #ccc', width: '100%' }
                            }
                        />
                        <span style={this.state.valCompanyAddress ? { color: '#F86C6B', width: '100%', fontSize: '80%', display: 'inline-block' } : { visibility: 'collapse', width: '100%', display: 'inline-block' }}>*Company's address required</span>
                        <span>Revenue : </span>
                        <input
                            className="form-control"
                            placeholder="company revenue"
                            onChange={(e) => {
                                this.setState({ companyRevenue: e.target.value });
                                if (e.target.value.length > 0) {
                                    this.setState({ valCompanyRevenue: false })
                                }
                            }}
                            style={this.state.valCompanyRevenue ?
                                { border: '1px solid red', width: '100%' }
                                :
                                { border: '1px solid #ccc', width: '100%' }
                            }
                        />
                        <span style={this.state.valCompanyRevenue ? { color: '#F86C6B', width: '100%', fontSize: '80%', display: 'inline-block' } : { visibility: 'collapse', width: '100%', display: 'inline-block' }}>*Company's revenue required</span>
                        <span>Phone No : </span>
                        <div style={{ width: '100%' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="phone number"
                                onChange={(e) => {
                                    // this.number1(e.target.value);
                                    this.setState({ companyPhoneNo: e.target.value });
                                    if (e.target.value.length > 0) {
                                        this.setState({ valCompanyPhoneNo: false })
                                        if (this.state.companyPhoneCode) {
                                            this.setState({ valCompanyPhone: false })
                                        }
                                    }
                                }}
                                style={!this.state.valCompanyPhoneNo ?
                                    { border: '1px solid #ccc', width: 'calc(100% - 70px)', float: 'right' }
                                    :
                                    { border: '1px solid red', width: 'calc(100% - 70px)', float: 'right' }
                                }
                            />
                            <input
                                className="form-control"
                                placeholder="code"
                                onChange={(e) => {
                                    // this.number2(e.target.value);
                                    this.setState({ companyPhoneCode: e.target.value });
                                    if (e.target.value.length > 0) {
                                        this.setState({ valCompanyPhoneCode: false })
                                        if (this.state.companyPhoneNo) {
                                            this.setState({ valCompanyPhone: false })
                                        }
                                    }
                                }}
                                style={!this.state.valCompanyPhoneCode ?
                                    { border: '1px solid #ccc', width: '60px' }
                                    :
                                    { border: '1px solid red', width: '60px' }
                                }
                            />
                        </div>
                        <span style={this.state.valCompanyPhone ? { color: '#F86C6B', width: '100%', fontSize: '80%', display: 'inline-block' } : { visibility: 'collapse', width: '100%', display: 'inline-block' }}>
                            {this.state.valCompanyPhoneNo ?
                                this.state.valCompanyPhoneCode ?
                                    "*Company's phone required"
                                    :
                                    "*Company's phone number required"
                                :
                                this.state.valCompanyPhoneCode ?
                                    "*Company's phone code required"
                                    :
                                    "zz"
                            }
                        </span>
                        <button style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }} type="button" class="btn btn-default" onClick={() => this.createCompanyHandler()}>Create</button>
                    </div>
                </div>
                <div className="box">
                    <span className="form-label">
                        {this.state.Companies.length === 0 ? <center>No Companies Data</center> : "Companies"}
                    </span>
                    {this.state.Companies.map((data, index) => {
                        return (
                            <Col className="company-box" md={6}>
                                <button className="btn-danger"
                                    style={{width:'23px', height:'23px', float:'right', cursor: 'pointer', fontWeight:700, border:'1px solid #cccccc', borderRadius:'50%'}} 
                                    onClick={()=> this.removeCompanies(data)}><center>X</center></button>
                                <span className="title">
                                    {data.name}
                                </span>
                                <hr className="line" />
                                <div style={{ height: '60px' }}>
                                    <span className="labell">Address : </span>
                                    {data.address}
                                </div>
                                <div>
                                    <span className="labell">Avenue : </span>
                                    {data.revenue}
                                </div>
                                <div>
                                    <span className="labell">Phone No : </span>
                                    ({data.phoneCode}) {data.phoneNo}
                                </div>
                            </Col>
                        )
                    })}
                </div>
            </Grid>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products,
        user: state.user,
        userPlusProp: `${state.user} ${props.aRandomProps}`
    }
};

const mapActionToProps = (dispatch, props) => {
    console.log(props)
    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch);
};


export default connect(mapStateToProps, mapActionToProps)(Home);