/* eslint-disable @next/next/no-img-element */
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import brandLogo from "../../assests/rr-traders-logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 shadow">
      <Navbar fluid>
        <Navbar.Brand href="">
          <Image
            src={brandLogo}
            className="mr-3 "
            alt="F"
            height={50}
            width={200}
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RR Traders
          </span> */}
        </Navbar.Brand>
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
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
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
