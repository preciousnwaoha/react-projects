import { useRouter } from "next/router";

//  our-domain.com/news/something-important

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send request to backed API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
