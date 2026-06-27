"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import SignOutButtonComponent from "@/app/dashboard/component/sign-out-button/sign-out-button.component";

import MingcuteCalendar2Line from "@/icons/MingcuteCalendar2Line";
import MingcuteHandHeartLine from "@/icons/MingcuteHandHeartLine";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";

import styles from "./sidebar.module.css";

const items = [
  {
    title: "ویرایش پروفایل",
    href: "/dashboard/profile",
    icon: <MingcuteUser3Line />,
  },
  {
    title: "نوبت های من",
    href: "/dashboard/appointments",
    icon: <MingcuteCalendar2Line />,
  },
  {
    title: "لیست پزشکان من",
    href: "/dashboard/bookmarks",
    icon: <MingcuteHandHeartLine />,
  },
];

export default function SidebarComponent() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Pages in Dashboard">
        <ul>
          {items.map((item) => (
            <li
              key={item.title}
              className={clsx(
                styles.item,
                pathname === item.href && styles.active,
              )}
            >
              <Link href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SignOutButtonComponent className={styles.item} />
    </aside>
  );
}
