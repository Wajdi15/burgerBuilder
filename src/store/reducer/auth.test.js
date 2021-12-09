import reducer from "./auth";
import * as actions from "../actions/actionsType";

describe("Auth reducer", () => {
  it("should return the intial state", () => {
    expect(reducer(undefined, {})).toEqual({
      idToken: null,
      userId: null,
      error: null,
      loading: false,
    });
  });
  it("shouls store the token uponthe login", () => {
    expect(
      reducer(
        {
          idToken: null,
          userId: null,
          error: null,
          loading: false,
        },
        { type: actions.AUTH_SUCCESS, idToken: "wajdi", userId: "233" }
      )
    ).toEqual({
        idToken: "wajdi",
        userId:"233",
        error: null,
        loading: false,
    });
  });
});
