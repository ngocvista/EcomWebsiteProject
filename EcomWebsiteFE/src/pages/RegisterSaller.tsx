import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterSection from "../components/Account/RegisterSection";
import RegisterSallerSection from "../components/Account/RegisterSallerSection";

const RegisterSaller: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-content">
      <div className="main">
        {/* ===== breadcrumb ===== */}
        <section id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb-content d-flex m-0 p-0">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <span>Đăng ký tài khoản bán hàng</span>
              </li>
            </ul>
          </div>
        </section>
        {/* ===== content ===== */}
        <RegisterSallerSection />
      </div>
    </div>
  );
};

export default RegisterSaller;