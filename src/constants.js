const CONTRACT_ADDRESS = '0x1e8C51ADEe50b57970ccDDD328b0c7eB8d0423BF';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    chakra: characterData.chakra.toNumber(),
    maxChakra: characterData.maxChakra.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
