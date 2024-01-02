import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import fetchData from "../../../ui/api/data.json";
import Link from "next/link";

export default function SingleUserPage({ params }: { params: { id: number } }) {
  interface UserData {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    address?: string;
    isAdmin?: boolean;
    isActive?: boolean;
  }
  let data: UserData = {};

  fetchData.users.filter((user) => {
    user.id == params.id ? (data = user) : "";
  });

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {data.name}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>ID</label>
          <input type="text" name="id" value={data.id} readOnly />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={data.name}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={data.email}
          />
          <label>Password</label>
          <input type="password" name="password" value={data.password} />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={data.phone}
          />
          <label>Address</label>
          <textarea
            typeof="text"
            name="address"
            placeholder="address"
            value={data.address}
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" value={String(data.isAdmin)}>
            <option value={"true"}>Yes</option>
            <option value={"false"}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" value={String(data.isActive)}>
            <option value={"true"}>Yes</option>
            <option value={"false"}>No</option>
          </select>
          <Link href="/dashboard/users">Back to Users page</Link>
        </form>
      </div>
    </div>
  );
}
