export default function({ app }) {
  if (app.$fireAuth) {
    console.info(
      'Firebase Services can be accessed with app.$fireAuth (etc.) in Middleware.'
    )
  }
}
