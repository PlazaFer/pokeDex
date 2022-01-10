

export const setImagePokemon = (sprite) => {

    let image = sprite.other.dream_world.front_default;

    if (!sprite.other.dream_world.front_default && sprite.other.home.front_default) {
      image = sprite.other.home.front_default;
    } else if (!sprite.other.home.front_default) {
      image = sprite.front_default;
    }

    return image;

}
