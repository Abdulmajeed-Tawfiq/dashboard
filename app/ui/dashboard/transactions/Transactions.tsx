import Image from "next/image";
import styles from "./transactions.module.css";
import fetchData from "../../api/data.json";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {fetchData.transactions.slice(-4).map((tran) => (
            <tr key={tran.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {tran.Name}
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status}`}
                  style={{
                    backgroundColor:
                      tran.Status == "pending"
                        ? "#f7cb7375"
                        : tran.Status == "done"
                        ? "#afd6ee75"
                        : "#f7737375",
                  }}
                >
                  {tran.Status}
                </span>
              </td>
              <td>{tran.Date}</td>
              <td>${tran.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
