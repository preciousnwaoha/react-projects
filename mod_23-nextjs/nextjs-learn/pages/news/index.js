// our-domain.com/news/
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/elun-musk-just-ruined-his-fan-base">
            Elun musk just ruined his fan base
          </Link>
        </li>
        <li>How Ukraine might destroy russia</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
