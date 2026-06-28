"use client";

import React, { useRef } from "react";

import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";

import MingcuteIncognitoModeLine from "@/icons/MingcuteIncognitoModeLine";
import MingcuteMailLine from "@/icons/MingcuteMailLine";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";

import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "./profile-form.module.css";

export default function ProfileFormComponent() {
  const formRef = useRef(null);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = await fetchWithToast(
      "/api/dashboard/profile",
      {
        method: "PATCH",
        body: JSON.stringify(dto),
      },
      "ویرایش با موفقیت انجام شد.",
    );

    if (result.error) {
      return;
    }
  };
  return (
    <CardComponent className={styles["profile-form"]}>
      <h1>ویرایش پروفایل</h1>
      <form ref={formRef} onSubmit={formSubmitHandler}>
        <NormalInputComponent
          label="نام و نام خانوادگی"
          type="text"
          name="name"
          prefixIcon={<MingcuteIncognitoModeLine />}
        />
        <NormalInputComponent
          label="نام کاربری"
          type="text"
          name="username"
          prefixIcon={<MingcuteUser3Line />}
        />
        <NormalInputComponent
          label="ایمیل"
          type="email"
          name="email"
          prefixIcon={<MingcuteMailLine />}
        />
        <PasswordInputComponent
          label="رمز عبور"
          name="password"
          autoComplete="new-password"
        />
        <ButtonComponent variant="primary">ثبت‌نام</ButtonComponent>
      </form>
    </CardComponent>
  );
}
