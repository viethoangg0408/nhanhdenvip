import { Button, Card, Col, Input, notification, Row } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateDonVi extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idDonVi: 1,
            TenDonVi: "",
            DiaChi: "",
            SoDienThoai: "",
            MoTa:"",
            MatKhau:"",
            MaDonVi: "",
            isEdit: window.location.pathname !== "/admin/product/new",
            currentId: -1
        }
    }

    componentDidMount() {
        if (this.state.isEdit) {
            let idDV = window.location.pathname.replace("/admin/product/edit/", "")
            fetch(`https://6297495e8d77ad6f75fef531.mockapi.io/DonVi/${idDV}`)
                .then((res) => res.json())
                .then((data) => {
                this.setState({
                    idDonVi: data.idDonVi,
                    TenDonVi: data.TenDonVi,
                    DiaChi: data.DiaChi,
                    SoDienThoai: data.SoDienThoai,
                    MoTa: data.MoTa,
                    MatKhau: data.MatKhau,
                    MaDonVi: data.MaDonVi,
                    currentId: data.idDonVi
                })
            })
            .catch((err) => console.log(err));
        }
    }

    handleSave = () => {
        const { idDonVi, TenDonVi, DiaChi, SoDienThoai, MoTa, MatKhau, MaDonVi, currentId, isEdit} = this.state;
        const { getData } = this.props;
    
        if (!TenDonVi || !DiaChi || !SoDienThoai || !MoTa || !MatKhau || !MaDonVi) {
            notification.open("Lỗi xảy ra khi tạo lưu bài viết");
        } else {
          if(isEdit) {
            axios
            .put(`https://6297495e8d77ad6f75fef531.mockapi.io/DonVi/${currentId}`, {
                TenDonVi, DiaChi, SoDienThoai, MoTa, MatKhau, MaDonVi
            })
            .then(function (response) {
              console.log("response", response);
              getData();
              notification.open("Cập nhật thành công !");
            })
            .catch(function (error) {
              console.log("error", error);
            });
          } else {
            axios
            .post("https://6297495e8d77ad6f75fef531.mockapi.io/DonVi", {
                TenDonVi, DiaChi, SoDienThoai, MoTa, MatKhau, MaDonVi
            })
            .then(function (response) {
              console.log("response", response);
              getData();
              window.history.back();
            })
            .catch(function (error) {
              console.log("error", error);
            });
          }
        }
    };

    handleChangeInput = (field, value) => {
        if (value) {
          this.setState({ [field]: value });
        } else {
          this.setState({ [field]: "" });
        }
    };

    render() {
        var { isEdit, idDonVi, TenDonVi, DiaChi, SoDienThoai, MoTa, MatKhau, MaDonVi } = this.state;
        return(
            <Card className="ant-content-head">
                <div className="title-bar--main mb-30">
                    <div className="l-product-wrapper flex space-between flex-middle">
                        <div className="title-bar--main-left"> Tạo đơn vị mới </div>
                        <div className="title-bar--main-right flex">
                            <Link
                                className="btn_Huy ant-btn flex flex-middle flex-center ml-20"
                                to="/admin/product"
                                >
                                    Huỷ
                            </Link>
                            <Button
                                className="btn_Save ant-btn ml-20"
                                type="primary"
                                onClick={() => this.handleSave()}
                                >
                                <div className="flex flex-middle flex-center">
                                    <svg viewBox="64 64 896 896" focusable="false" className="mr-5" data-icon="save" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
                                    </svg>
                                    {
                                        isEdit ? "Lưu đơn vị" : "Thêm đơn vị" 
                                    }
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                <div className="ant-collapse-item ant-collapse-item-active mb-20">
                    <div className="edit-product--content">
                        <div className="ant-collapse-header p-0">
                            <div className="l-title-collapse-blog mb-15">
                                <h5>Nội dung đơn vị</h5>
                                <span>Thiết lập tiêu đề và nội dung cho đơn vị</span>
                            </div>
                        </div>
                        <div className="form-section mt-15">
                            <Row type="flex" style={{ marginBottom: 25 }}>
                                <Col span={16}>
                                    <h3 style={{ marginLeft: 5 }} className="label_customer">Tên đơn vị</h3>
                                    <Input
                                        className="is-fullwidth"
                                        placeholder="Nhập tên đơn vị..."
                                        value={TenDonVi}
                                        onChange={(e) => this.handleChangeInput("TenDonVi", e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row type="flex" style={{ marginBottom: 25 }}>
                                <Col span={16}>
                                    <h3 style={{ marginLeft: 5 }} className="label_customer">Địa chỉ</h3>
                                    <Input
                                        className="is-fullwidth"
                                        placeholder="Nhập địa chỉ..."
                                        value={DiaChi}
                                        onChange={(e) => this.handleChangeInput("DiaChi", e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row type="flex" style={{ marginBottom: 25 }}>
                                <Col span={16}>
                                    <h3 style={{ marginLeft: 5 }} className="label_customer">Số điện thoại</h3>
                                    <Input
                                        className="is-fullwidth"
                                        placeholder="Nhập số điẹn thoại..."
                                        value={SoDienThoai}
                                        onChange={(e) => this.handleChangeInput("SoDienThoai", e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row type="flex" style={{ marginBottom: 25 }}>
                                <Col span={16}>
                                    <h3 style={{ marginLeft: 5 }} className="label_customer">Mật khẩu</h3>
                                    <Input
                                        className="is-fullwidth"
                                        placeholder="Nhập mật khẩu..."
                                        value={MatKhau}
                                        type="password"
                                        onChange={(e) => this.handleChangeInput("MatKhau", e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row type="flex" style={{ marginBottom: 25 }}>
                                <Col span={16}>
                                    <h3 style={{ marginLeft: 5 }} className="label_customer">Mã đơn vị</h3>
                                    <Input
                                        className="is-fullwidth"
                                        placeholder="Nhập mã đơn vị..."
                                        value={MaDonVi}
                                        onChange={(e) => this.handleChangeInput("MaDonVi", e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row type="flex" style={{ marginBottom: 15 }}>
                                <Col span={16}>
                                    <h3 style={{ marginLeft: 5 }} className="label_customer">Nội dung bài viết</h3>
                                    <Input.TextArea
                                        style={{ minHeight: "150px" }}
                                        className="is-fullwidth"
                                        placeholder="Nhập mã đơn vị..."
                                        value={MoTa}
                                        onChange={(e) => this.handleChangeInput("MoTa", e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                </div>
            </Card>
        )
    }
}

export default CreateDonVi