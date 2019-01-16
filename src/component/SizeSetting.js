import React, { Component } from 'react';
class SizeSetting extends Component {

    changeSize(value){
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    .
                    <div class="row">

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">

                            <button type="button" className="btn btn-success"
                            onClick={() => this.changeSize(-2)} 
                            >Giảm</button>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                            <button type="button" className="btn btn-success"
                            onClick={() => this.changeSize(2)}
                            >Tăng</button>
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}
export default SizeSetting;
