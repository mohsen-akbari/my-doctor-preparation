// "use client";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";

import prisma from "@/lib/prisma";

export default async function Home() {
  
 const users = await prisma.user.findMany();
  console.log(users);
  
  
  return (
    <div className={styles.home}>
      {/* <h1>
        <MyDoctorLogo />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div> */}
      {
        users.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))
      }
    </div>
  );
}
