import React from "react";
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import "../../main.css"
import Categories from "../Category";
import Products from "../Products";

export default function CustomLinkExample() {
  return (
    <Router>
      <section className="ant-layout ant-layout-has-sider">
        <div className="ant-tabs ant-tabs-left">
          <div className="ant-tabs-nav">
            <div className="ant-tabs-nav-wrap">
              <div className="ant-tabs-nav-list">
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", color:"#fff", fontWeight: 700, fontSize:36, marginBottom: 15 }}>
                  <div style={{ fontFamily: "cursive"}}>HOC MAI</div>
                </div>
                <OldSchoolMenuLink
                  activeOnlyWhenExact={true}
                  to="/admin/categories"
                  label={
                    <div className='d-flex'>
                      <svg className="anticon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" fill="none">
                        <path d="M13.5 15V7.5" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round"></path>
                        <path d="M9 15V3" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round"></path>
                        <path d="M4.5 15V10.5" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round"></path>
                      </svg>
                      Danh mục
                    </div>
                  }

                />
                <OldSchoolMenuLink
                  to="/admin/product"
                  label={
                    <div className='d-flex flex-middle'>
                      <svg className="anticon mr-5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.3571 5.63154H15.1875V3.3494C15.1875 2.99382 14.9002 2.70654 14.5446 2.70654H8.21652L5.86004 0.452522C5.83006 0.424452 5.79062 0.408677 5.74955 0.408325H0.642857C0.287277 0.408325 0 0.695602 0 1.05118V12.944C0 13.2996 0.287277 13.5869 0.642857 13.5869H14.6652C14.9263 13.5869 15.1634 13.4282 15.2618 13.1851L17.9538 6.51547C17.9839 6.43913 18 6.35676 18 6.2744C18 5.91882 17.7127 5.63154 17.3571 5.63154ZM1.44643 1.85475H5.23326L7.63594 4.15297H13.7411V5.63154H3.49554C3.23437 5.63154 2.99732 5.79024 2.89888 6.03333L1.44643 9.63333V1.85475ZM14.2092 12.1405H1.90848L3.98371 6.99761H16.2864L14.2092 12.1405Z" fill="white"></path>
                      </svg>
                      Sản phẩm
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/admin/categories">
            <Categories/>
          </Route>
          <Route path="/admin/product">
            <Products/>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "ant-tabs-tab ant-tabs-tab-active" : "ant-tabs-tab"}>
      {match && " "}
      <Link to={to}>{label}</Link>
    </div>
  );
}