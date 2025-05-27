import express, { Request, Response } from "express";

export const gitHubCommitHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const secret = process.env.GITLAB_SECRET!;
  const token = req.header("X-Gitlab-Token");

  if (token !== secret) {
    return res.status(401).send("Invalid token");
  }
  const payload = req.body;
  const username = payload.user_name;
  const project = payload.project_name;
  const commit = payload.commits[0];

  const message = `:rocketL [SUCCESS] ${username} pushed the code to*${project}*\n> ${commit.message}\n🔗 ${commit.url}`;

  res.status(200).send(message);
};
