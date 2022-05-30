import { Card, Input, Table, Tooltip } from "antd"
import React from "react"
import "../../index.css"

function Products() {
    const columns = [
        {
            title: 'Mã đơn vị',
            dataIndex: 'idUnit',
        },
        {
            title: 'Tên đơn vị',
            dataIndex: 'nameUnit',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Mô tả',
            dataIndex: 'Note',
        },
        {
            title: 'Hành động',
            fixed: "right",
            width: 160,
            render: (record) => (
                <div className="table-action">
                    <Tooltip title="Chỉnh sửa">
                        <div className="table-action--item ml-8">
                            <span className="webcake">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path
                                        d="M3.45872 12.284C3.49443 12.284 3.53015 12.2805 3.56586 12.2751L6.56943 11.7483C6.60515 11.7412 6.63908 11.7251 6.66408 11.6983L14.2337 4.12868C14.2503 4.11216 14.2634 4.09254 14.2724 4.07094C14.2813 4.04934 14.2859 4.02618 14.2859 4.00279C14.2859 3.9794 14.2813 3.95625 14.2724 3.93464C14.2634 3.91304 14.2503 3.89342 14.2337 3.8769L11.2659 0.907254C11.2319 0.873326 11.1873 0.855469 11.1391 0.855469C11.0909 0.855469 11.0462 0.873326 11.0123 0.907254L3.44265 8.4769C3.41586 8.50368 3.39979 8.53583 3.39265 8.57154L2.86586 11.5751C2.84849 11.6708 2.8547 11.7692 2.88395 11.862C2.91319 11.9547 2.9646 12.0389 3.03372 12.1073C3.15158 12.2215 3.29979 12.284 3.45872 12.284ZM4.66229 9.16975L11.1391 2.69475L12.448 4.00368L5.97122 10.4787L4.38372 10.759L4.66229 9.16975ZM14.5712 13.784H1.42836C1.11229 13.784 0.856934 14.0394 0.856934 14.3555V14.9983C0.856934 15.0769 0.921219 15.1412 0.999791 15.1412H14.9998C15.0784 15.1412 15.1426 15.0769 15.1426 14.9983V14.3555C15.1426 14.0394 14.8873 13.784 14.5712 13.784Z"
                                        fill="#8C8C8C"
                                    />
                                </svg>
                            </span>
                        </div>
                    </Tooltip>
                    <Tooltip title="Xoá">
                        <div className="table-action--item table-action--item__delete ml-8" >
                            <span className="webcake">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path
                                    d="M4.28544 2.14118H4.14258C4.22115 2.14118 4.28544 2.0769 4.28544 1.99833V2.14118H9.71401V1.99833C9.71401 2.0769 9.77829 2.14118 9.85687 2.14118H9.71401V3.4269H10.9997V1.99833C10.9997 1.36797 10.4872 0.855469 9.85687 0.855469H4.14258C3.51222 0.855469 2.99972 1.36797 2.99972 1.99833V3.4269H4.28544V2.14118ZM13.2854 3.4269H0.714007C0.397935 3.4269 0.142578 3.68225 0.142578 3.99833V4.56976C0.142578 4.64833 0.206864 4.71261 0.285435 4.71261H1.36401L1.80508 14.0519C1.83365 14.6608 2.33722 15.1412 2.94615 15.1412H11.0533C11.664 15.1412 12.1658 14.6626 12.1944 14.0519L12.6354 4.71261H13.714C13.7926 4.71261 13.8569 4.64833 13.8569 4.56976V3.99833C13.8569 3.68225 13.6015 3.4269 13.2854 3.4269ZM10.9158 13.8555H3.08365L2.65151 4.71261H11.3479L10.9158 13.8555Z"
                                    fill="#8C8C8C"
                                />
                                </svg>
                            </span>
                        </div>
                    </Tooltip>
                </div>
            ),
        }
    ];

    const data = [
        {
            key: 0,
            idUnit: 0,
            nameUnit: "Bá Thước",
            address: "Bá Thước",
            phoneNumber: "0987654321",
            Note:"ád",
        },
        {
            key: 1,
            idUnit: 1,
            nameUnit: "Ngọc Lặc",
            address: "Ngọc Lặc",
            phoneNumber: "0987654321",
            Note:"ád",
        },
        {
            key: 2,
            idUnit: 2,
            nameUnit: "Nghi Sơn",
            address: "Nghi Sơn",
            phoneNumber: "0987654321",
            Note:"ád",
        },
        {
            key: 3,
            idUnit: 3,
            nameUnit: "Hậu Lộc",
            address: "Hậu Lộc",
            phoneNumber: "0987654321",
            Note:"ád",
        }
    ];

    return(
        <div className="ant-tabs-right">
            <div className="ant-layout-header">
                <div className="header-page ant-breadcrumb">
                    <svg className="anticon mr-5" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 18" fill="none">
                        <path d="M17.3571 5.63154H15.1875V3.3494C15.1875 2.99382 14.9002 2.70654 14.5446 2.70654H8.21652L5.86004 0.452522C5.83006 0.424452 5.79062 0.408677 5.74955 0.408325H0.642857C0.287277 0.408325 0 0.695602 0 1.05118V12.944C0 13.2996 0.287277 13.5869 0.642857 13.5869H14.6652C14.9263 13.5869 15.1634 13.4282 15.2618 13.1851L17.9538 6.51547C17.9839 6.43913 18 6.35676 18 6.2744C18 5.91882 17.7127 5.63154 17.3571 5.63154ZM1.44643 1.85475H5.23326L7.63594 4.15297H13.7411V5.63154H3.49554C3.23437 5.63154 2.99732 5.79024 2.89888 6.03333L1.44643 9.63333V1.85475ZM14.2092 12.1405H1.90848L3.98371 6.99761H16.2864L14.2092 12.1405Z" fill="#000"></path>
                    </svg>
                    <a href="/admin/subject">
                        <span>Trang chủ</span>
                    </a>
                    <span className="ml-5 mr-5">/</span>
                    <span>Cập nhật</span>
                </div>
            </div>
            <div className="customer-rows customerCreate_table">
                <div className="customer-info--column">
                    <Card className="ant-content-head">
                        <div className="title-bar--main mb-20">
                            <div className="l-product-wrapper flex space-between flex-middle">
                                <div className="title-bar--main-left">
                                    <div className="flex flex-middle flex-center fw600">
                                        <svg className="mr-10" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3438 2.5H2.65625C2.57031 2.5 2.5 2.58036 2.5 2.67857V3.92857C2.5 4.02679 2.57031 4.10714 2.65625 4.10714H17.3438C17.4297 4.10714 17.5 4.02679 17.5 3.92857V2.67857C17.5 2.58036 17.4297 2.5 17.3438 2.5ZM17.3438 8.83929H2.65625C2.57031 8.83929 2.5 8.91964 2.5 9.01786V10.2679C2.5 10.3661 2.57031 10.4464 2.65625 10.4464H17.3438C17.4297 10.4464 17.5 10.3661 17.5 10.2679V9.01786C17.5 8.91964 17.4297 8.83929 17.3438 8.83929ZM17.3438 15.1786H2.65625C2.57031 15.1786 2.5 15.2589 2.5 15.3571V16.6071C2.5 16.7054 2.57031 16.7857 2.65625 16.7857H17.3438C17.4297 16.7857 17.5 16.7054 17.5 16.6071V15.3571C17.5 15.2589 17.4297 15.1786 17.3438 15.1786Z" fill="#262626"/>
                                        </svg>
                                        Danh mục
                                    </div>
                                </div>
                                <div className="title-bar--main-right flex">
                                    <button type="button" className="ant-btn ant-btn-primary btn_Save ant-btn ml-20">
                                        <div className="flex flex-middle flex-center">
                                            + Thêm
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="ant-content-search mb-20">
                            <div className="flex flex-middle">
                                Tên đơn vị:
                                <div className="ant-content-input-search ml-10">
                                    <Input
                                        placeholder="Tìm đơn vị"
                                        value=""
                                        className="input-search"
                                    />
                                    <button className="btn-find mr-10 ml-10">
                                        Bộ lọc
                                    </button>
                                    <button className="btn-search">
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="ant-content-table">
                            <Table
                                scroll={{ y: "calc(100vh - 350px)", x: 1250 }}
                                className="order-table"
                                bordered={true}
                                columns={columns}
                                dataSource={data}
                                pagination={false}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Products