import { userAddressForm, userCompanyForm } from '../utilities/user'
import { useParams, useLocation } from 'react-router-dom'
import { fetchUserById, editUser } from '../api/axios'
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Space } from 'antd'
import { useUser } from '../UserContext'

function ProfileView() {

  const { id } = useParams();
  const { defaultUser } = useUser();

  const location = useLocation();
  const { comment } = location.state || {};

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      companyName: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const getInitials = (firstName, lastName) => {
    const initials = [firstName.charAt(0)];
    if (lastName) {
      initials.push(lastName.charAt(0));
    }
    return initials.join("");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = id || defaultUser.id || (comment && comment.userId);

        if (parseInt(userId) >= 11) {
          setForm({
            firstName: comment.authorName.split(" ")[0] || "",
            lastName: comment.authorName.split(" ")[1] || "",
            username: comment.authorName || "",
            email: comment.email || "",
            phone: comment.phone || "",
            website: comment.website || "",
            address: {
              street:
                (comment && comment.address && comment.address.street) || "",
              suite:
                (comment && comment.address && comment.address.suite) || "",
              city: (comment && comment.address && comment.address.city) || "",
              zipcode:
                (comment && comment.address && comment.address.zipcode) || "",
            },
            company: {
              companyName:
                (comment && comment.company && comment.company.name) || "",
              catchPhrase:
                (comment && comment.company && comment.company.catchPhrase) ||
                "",
              bs: (comment && comment.company && comment.company.bs) || "",
            },
          });
        } else {
          const data = await fetchUserById(1);
          console.log(data);
          const nameParts = data.name.split(" ");
          setForm({
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || "",
            username: data.username,
            email: data.email,
            phone: data.phone,
            website: data.website,
            address: {
              street: (data.address && data.address.street) || "",
              suite: (data.address && data.address.suite) || "",
              city: (data.address && data.address.city) || "",
              zipcode: (data.address && data.address.zipcode) || "",
            },
            company: {
              companyName: (data.company && data.company.name) || "", //
              catchPhrase: (data.company && data.company.catchPhrase) || "",
              bs: (data.company && data.company.bs) || "",
            },
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchData();
  }, [id, defaultUser, comment]);

  const { firstName, lastName, username, email, phone, website, address: { street, suite, city, zipcode }, company: { companyName, catchPhrase, bs } } = form;

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleEditAddress = (e) => {
    const editedAddress = userAddressForm(form, e.target);
    setForm(editedAddress);
  };

  const handleEditCompany = (e) => {
    const editedCompany = userCompanyForm(form, e.target);
    setForm(editedCompany);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editUser(id, form);
    console.log("User edited successfully:", form);
  };

  console.log('defaultUser',defaultUser)

  return (
    <>
      <h2>Profile</h2>
      <Space direction="horizontal" size="small">
        <div className="author-initials">
          <h3>{getInitials(firstName, lastName)}</h3>
        </div>
        <h3>
          {firstName} {lastName}
        </h3>
      </Space>
      <Form
        onSubmit={handleSubmit}
        name="profile-form"
        layout="vertical"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        className="custom-form"
      >
        <div className="form-column">
          <div className="account-info">
            <h3>Account Info</h3>

            <Form.Item label="First Name" required>
              <Input
                type="text"
                name="firstName"
                disabled
                value={defaultUser.name}
                onChange={handleEdit}
              />
            </Form.Item>

            <Form.Item label="Last Name" required>
              <Input
                type="text"
                name="lastName"
                disabled
                value={defaultUser.name}
                defaultValue={lastName}
                onChange={handleEdit}
              />
              <div>
                {lastName}
              </div>
            </Form.Item>

            <Form.Item label="Username" required>
              <Input
                type="text"
                name="username"
                disabled
                value={defaultUser.username}
                onChange={handleEdit}
              />
            </Form.Item>

            <Form.Item label="Email" required>
              <Input
                type="email"
                name="email"
                disabled
                value={defaultUser.email}
                onChange={handleEdit}
              />
            </Form.Item>
          </div>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <Form.Item label="Phone" required>
              <Input
                type="text"
                name="phone"
                disabled
                value={defaultUser.phone}
                onChange={handleEdit}
              />
            </Form.Item>

            <Form.Item label="Website">
              <Input
                type="text"
                name="website"
                disabled
                value={defaultUser.website}
                onChange={handleEdit}
              />
            </Form.Item>
          </div>
        </div>

        <div className="form-column">
          <div className="address-info">
            <h3>Address Info</h3>
            <Form.Item label="Street">
              <Input
                type="text"
                name="street"
                disabled
                value={defaultUser.address?.street}
                onChange={handleEditAddress}
              />
            </Form.Item>

            <Form.Item label="Suite">
              <Input
                type="text"
                name="suite"
                disabled
                value={defaultUser.address?.suite}
                onChange={handleEditAddress}
              />
            </Form.Item>

            <Form.Item label="City">
              <Input
                type="text"
                name="city"
                disabled
                value={defaultUser.address?.city}
                onChange={handleEditAddress}
              />
            </Form.Item>

            <Form.Item label="Zipcode">
              <Input
                type="text"
                name="zipcode"
                disabled
                value={defaultUser.address?.zipcode}
                onChange={handleEditAddress}
              />
            </Form.Item>
          </div>

          <div className="company-info">
            <h3>Company Info</h3>
            <Form.Item label="Name">
              <Input
                type="text"
                name="companyName"
                disabled
                value={defaultUser.company?.name}
                onChange={handleEditCompany}
              />
            </Form.Item>

            <Form.Item label="Catch Phrase">
              <Input
                type="text"
                name="catchPhrase"
                disabled
                value={defaultUser.company?.catchPhrase}

                onChange={handleEditCompany}
              />
            </Form.Item>

            <Form.Item label="Business Statement">
              <Input
                type="text"
                name="bs"
                disabled
                value={defaultUser.company?.bs}
                onChange={handleEditCompany}
              />
            </Form.Item>
          </div>

          <div className="save-button">
            <Button
              type="text"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#f0f0f0",
                color: "black",
                height: "30px",
                fontSize: "11px",
                fontWeight: "bold",
                borderRadius: "0",
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ProfileView;