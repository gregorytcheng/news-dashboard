import React, { useEffect, useState } from "react";
import { getHeadlines } from "../../services/NewsFeedService";
import { Feed, Header, Icon } from "semantic-ui-react";

const NewsFeed = ({ source, title }) => {
  const [headlines, setHeadlines] = useState([]);
  const [headlinesLoaded, setHeadlinesLoaded] = useState(false);

  useEffect(() => {
    getHeadlines(source).then((data) => {
      setHeadlines(data.results);
      setHeadlinesLoaded(true);
    });
  }, []);

  return (
    <>
      <Header as="h1">{title}</Header>

      {!headlinesLoaded ? (
        <Icon loading name="spinner" size="large" />
      ) : (
        <>
          <Feed>
            {headlines.map((headline) => (
              <Feed.Event key={headline.headline}>
                <Feed.Content>
                  <Feed.Summary>
                    <a
                      href={headline.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {headline.headline}
                    </a>
                  </Feed.Summary>
                  <Feed.Meta></Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </>
      )}
    </>
  );
};

export default NewsFeed;
