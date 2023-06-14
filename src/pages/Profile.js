import React, { useEffect, useState } from "react";

import UserService from "../services/UserService";
import { useGlobalContext } from "../context/AuthContext";
function Profile() {
  const { user } = useGlobalContext();
  const [singleUser, setSingleUser] = useState(null);
  // console.log("user", user);
  const getSingleUser = () => {
    UserService.getSingleUser(user.userId).then((res) => {
      // console.log(res.data);
      setSingleUser(res.data.user);
    });
  };
  useEffect(() => {
    user && getSingleUser();
  }, []);

  console.log("singleUser", singleUser);
  if (singleUser) {
    return (
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="row g-0">
                    <div
                      className="col-md-4 gradient-custom text-center text-white position-relative "
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                      }}
                    >
                      <div class="position-absolute top-50 start-50 translate-middle">
                        <h5>{singleUser.name}</h5>
                        <p>{singleUser.role}</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Personal Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-8 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{singleUser.email}</p>
                          </div>
                          {/* <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{user.phone}</p>
                        </div> */}
                        </div>
                        <h6>Change Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Change Password</h6>
                            {/* <p className="text-muted">Lorem ipsum</p> */}
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Change Name</h6>
                            {/* <p className="text-muted">Dolor sit amet</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
