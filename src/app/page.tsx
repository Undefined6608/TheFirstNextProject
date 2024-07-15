"use client";
import { FC, useEffect, useState } from "react";
import { getArticleTypeApi } from "@/services/api/article";
import { phoneLoginApi } from "@/services/api/user";
import { ArticleType } from "@/types/responseType";

const Home: FC = () => {
  const [userToken, setUserToken] = useState<string>("");
  const [articleType, setArticleType] = useState<ArticleType>();

  const getArticleType = async (): Promise<void> => {
    const res = await getArticleTypeApi();
    if (res.code === 200) {
      setArticleType(res.data);
    }
  };

  const phoneLogin = async (): Promise<void> => {
    const res = await phoneLoginApi({
      phone: "15506531157",
      password: "05493e37a8703d485be2625d674ce9c8",
    });
    if (res.code === 200) {
      setUserToken(res.data.token);
    }
  };

  useEffect(() => {
    getArticleType().then();
    phoneLogin().then();
  }, []);

  return (
    <>
      <div>{userToken ? userToken : null}</div>
      <br />
      <div>
        {articleType
          ? articleType.articleType.map((val) => (
              <>
                {val.type_name}
                <br />
              </>
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
