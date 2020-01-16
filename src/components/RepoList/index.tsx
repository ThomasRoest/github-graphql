import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Grid } from "./styles";

import RepoListItem from "../RepoListItem";
import { IRepository } from "../../types";

interface IRepoSearchResult {
  search: {
    edges: Array<{ repository: IRepository }>;
  };
}

interface IProps {
  language?: string;
}

const RepoList = ({ language = "javascript" }: IProps) => {
  const { data, loading, error } = useQuery<IRepoSearchResult>(
    SEARCH_POPULAR_REPOS,
    {
      variables: { queryString: `language:${language} stars:>10000` }
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid>
      {data?.search.edges.map(({ repository }) => (
        <RepoListItem key={repository.id} repository={repository} />
      ))}
    </Grid>
  );
};

export default RepoList;

const SEARCH_POPULAR_REPOS = gql`
  query searchPopularRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 12) {
      repositoryCount
      edges {
        repository: node {
          ... on Repository {
            id
            name
            description
            stargazers {
              totalCount
            }
            updatedAt
            licenseInfo {
              spdxId
            }
            forks {
              totalCount
            }
            primaryLanguage {
              id
              name
              color
            }
          }
        }
      }
    }
  }
`;
