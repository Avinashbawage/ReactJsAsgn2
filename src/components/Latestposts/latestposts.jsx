import React, { Component } from "react";
import styles from './latest.module.css'

export class Latestposts extends Component {
  render() {
    return (
      <div className={styles.latestposts}>
        <div className={styles.container}>
          <h2>Latest Posts</h2>
          <div className={styles.filtertext}>
            <img
              width={"24px"}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
              alt="Filter_Icon"
            />{" "}
            Filter by Category
          </div>
          <div className={styles.categoryfiltersection}>
                 <div className={styles.filteritems} id={styles.active}>All</div>
                 <div className={styles.filteritems}>Artificial Intelligence</div>
                 <div className={styles.filteritems}>Cloud computing    </div>
                 <div className={styles.filteritems}>DevOps</div>
                 <div className={styles.filteritems}>Programming language</div>
                 <div className={styles.filteritems}>Mobile Application Development </div>
                 <div  className={styles.filteritems}>Technology and Tools</div>
                 <div  className={styles.filteritems}>Get a Job in aTech Company</div>
                 <div  className={styles.filteritems}>Other</div>

          </div>
        </div>
      </div>
    );
  }
}

export default Latestposts;
