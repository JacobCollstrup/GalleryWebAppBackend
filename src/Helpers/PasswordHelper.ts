import { randomBytes, pbkdf2 } from "crypto";

export async function hashPassword(password: string, salt: string = "") {
  if (salt === "") {
    salt = randomBytes(128).toString("base64");
  }

  const iterations = 10000;
  const password_length = 256;
  const digest = "sha256";
  const result = await new Promise((res, rej) =>
    pbkdf2(password, salt, iterations, password_length, digest, function (
      error,
      hash
    ) {
      if (error) {
        return rej();
      } else {
        return res({
          salt,
          hash,
          iterations,
        });
      }
    })
  );

  if (!result) {
    throw "error";
  }

  // @ts-ignore
  return result.hash;

  //   return {
  //     salt: salt,
  //     hash: hash,
  //     iterations: iterations,
  //   };
}
