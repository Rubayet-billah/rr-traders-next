/* eslint-disable @next/next/no-img-element */
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import brandLogo from "../../assests/rr-traders-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ENUM_USER_ROLE } from "@/enums/user";
import { removeItemFromLocalstorage } from "@/utils/functions";
import { authKey } from "@/utils/constants";
import { removeUser } from "@/redux/features/user/userSlice";

const Header = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    removeItemFromLocalstorage(authKey);
  };
  return (
    <div className="sticky top-0 z-10 shadow">
      <Navbar fluid>
        <Navbar.Brand href="">
          <Link href="/">
            <Image
              src={brandLogo}
              className="mr-3 "
              alt="F"
              height={50}
              width={200}
            />
          </Link>
        </Navbar.Brand>
        {user ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                {" "}
                <button onClick={() => handleLogout()}>Sign out</button>{" "}
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex md:order-2">
            <Link
              className="uppercase font-bold lg:mx-3 hover:text-gray-400 duration-100"
              href="/auth/login"
            >
              Login
            </Link>
          </div>
        )}
        <Navbar.Collapse>
          <Navbar.Link className="uppercase lg:mx-3" href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link className="uppercase lg:mx-3" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="uppercase lg:mx-3">
            <Link href="/cart">Cart</Link>
          </Navbar.Link>
          {user?.role === ENUM_USER_ROLE.ADMIN && (
            <Navbar.Link className="uppercase lg:mx-3">
              <Link href="/dashboard">Dashboard</Link>
            </Navbar.Link>
          )}
          <Navbar.Link className="uppercase lg:mx-3" href="#">
            {" "}
            <Dropdown label="PRODUCTS" dismissOnClick={false} inline>
              <Dropdown.Item className="uppercase">Dashboard</Dropdown.Item>
              <Dropdown.Item className="uppercase">Settings</Dropdown.Item>
              <Dropdown.Item className="uppercase">Earnings</Dropdown.Item>
              <Dropdown.Item className="uppercase">Sign out</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link className="uppercase lg:mx-3" href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
