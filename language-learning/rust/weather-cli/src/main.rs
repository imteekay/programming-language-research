fn main() {
    let api_token = std::env::var("API_TOKEN")
        .expect("expected there to be an api token");
    dbg!(api_token);
}
