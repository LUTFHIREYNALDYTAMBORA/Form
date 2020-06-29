import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                txtUsername : '',
                txtPassword : '',
                txtDesc : '',
                gender : 0,
                religion : '',
                chkbStatus : false
            }
            this._handleChange = this._handleChange.bind(this);
            this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange = e => {
        let target = e.target;
        let name = target.name;
        var value = target.type === 'chechbox' ? target.checked : target.value;
        
        this.setState ({
            [name] : value    
        });
    }

    _handleSubmit (e)  {
        e.preventDefalut();
        console.log(this.state);
    }

    render () {        
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 border border-primary rounded">
                        <div className="panel panel-primary">
                              <div className="panel-heading bg-primary rounded mt-2">
                                    <h3 className="panel-title text-center">FORM</h3>
                              </div>
                              <div className="panel-body">
                                    <form onSubmit={this._handleSubmit}>
                                        <div className="form-group">
                                            <label><b>User Name :</b></label>
                                            <input 
                                                type = "text" 
                                                className = "form-control" 
                                                name = "txtName" 
                                                onChange = {this._handleChange} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label><b>Password :</b></label>
                                            <input 
                                                type = "password" 
                                                className = "form-control" 
                                                name = "txtPassword" 
                                                onChange = {this._handleChange} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label><b>Description :</b></label>
                                            <textarea 
                                                className="form-control" 
                                                rows="4"
                                                name = "txtDesc"
                                                onChange = {this._handleChange}
                                            />
                                        </div>
                                        <label><b>Gender :</b></label>
                                        <select 
                                            className="form-control" 
                                            name="gender"
                                            value={this.state.gender}
                                            onChange={this._handleChange}
                                            >
                                                <option value={0}>--Select Gender--</option>
                                                <option value={1}>Male</option>
                                                <option value={2}>Female</option>
                                        </select> <br/>
                                        <label><b>Religion :</b></label>
                                            <div className="radio">
                                                <label style={{paddingLeft: '25px'}}>
                                                    <input 
                                                        type="radio" 
                                                        name="religion" 
                                                        value="isl"
                                                        onChange={this._handleChange}
                                                        checked = {this.state.religion === "isl" }
                                                    />
                                                    Islam
                                                </label> <br/> 
                                                <label style={{paddingLeft: '25px'}}>
                                                    <input 
                                                        type="radio" 
                                                        name="religion"
                                                        value="kk"
                                                        onChange={this._handleChange}
                                                        checked = {this.state.religion === "kk" }
                                                    />
                                                    Kristen Katolik
                                                </label> <br/>
                                                <label style={{paddingLeft: '25px'}}>
                                                    <input 
                                                        type="radio" 
                                                        name="religion"
                                                        value="kp"
                                                        onChange={this._handleChange}
                                                        checked = {this.state.religion === "kp" }
                                                    />
                                                    Kristen Protestan
                                                </label> <br/>
                                                <label style={{paddingLeft: '25px'}}>
                                                    <input 
                                                        type="radio" 
                                                        name="religion"
                                                        value="hin"
                                                        onChange={this._handleChange}
                                                        checked = {this.state.religion === "hin" }
                                                    />
                                                    Hindu
                                                </label> <br/>
                                                <label style={{paddingLeft: '25px'}}>
                                                    <input 
                                                        type="radio" 
                                                        name="religion"
                                                        value="bud"
                                                        onChange={this._handleChange}
                                                        checked = {this.state.religion === "bud" }
                                                    />
                                                    Budha
                                                </label>
                                            </div> <br/>
                                            <div className="checkbox">
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        name="chkbStatus"
                                                        onChange={this._handleChange}
                                                        value={true} 
                                                        checked = {this.state.chkbStatus === true}
                                                    />
                                                    Send it?
                                                </label>
                                            </div> <br/>
                                            
                                        
                                        
                                        

                                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                        {/* nbsp = non break space (biar ada spasi)*/}
                                        &nbsp;
                                        <button type="reset" className="btn btn-danger mb-2">Reset</button>
                                    </form>
                                    


                              </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
