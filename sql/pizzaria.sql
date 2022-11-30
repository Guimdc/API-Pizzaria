
-- -----------------------------------------------------
-- Schema Pizzaria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Pizzaria` DEFAULT CHARACTER SET utf8 ;
USE `Pizzaria` ;

-- -----------------------------------------------------
-- Table `Pizzaria`.`sabor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`sabor` (
  `idsabor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sabor` VARCHAR(100) NULL,
  PRIMARY KEY (`idsabor`),
  UNIQUE INDEX `idpizza_UNIQUE` (`idsabor` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`borda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`borda` (
  `idborda` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `borda` VARCHAR(45) NULL,
  PRIMARY KEY (`idborda`),
  UNIQUE INDEX `idborda_UNIQUE` (`idborda` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`massa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`massa` (
  `idmassa` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `massa` VARCHAR(50) NULL,
  PRIMARY KEY (`idmassa`),
  UNIQUE INDEX `idmassa_UNIQUE` (`idmassa` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`pessoa` (
  `idpessoa` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  PRIMARY KEY (`idpessoa`),
  UNIQUE INDEX `idpessoa_UNIQUE` (`idpessoa` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`usuario` (
  `pessoa_idpessoa` INT UNSIGNED NOT NULL,
  `senha` VARCHAR(100) NULL,
  `perfil` VARCHAR(45) NULL,
  `token` VARCHAR(120) NULL,
  PRIMARY KEY (`pessoa_idpessoa`),
  CONSTRAINT `fk_usuario_pessoa`
    FOREIGN KEY (`pessoa_idpessoa`)
    REFERENCES `Pizzaria`.`pessoa` (`idpessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`tamanho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`tamanho` (
  `idtamanho` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tamanho` VARCHAR(45) NULL,
  `preco` FLOAT NULL,
  PRIMARY KEY (`idtamanho`),
  UNIQUE INDEX `idtamanho_UNIQUE` (`idtamanho` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`pedido` (
  `idpedido` INT NOT NULL,
  `massa_idmassa` INT UNSIGNED NOT NULL,
  `borda_idborda` INT UNSIGNED NOT NULL,
  `pessoa_idpessoa` INT UNSIGNED NOT NULL,
  `tamanho_idtamanho` INT UNSIGNED NOT NULL,
  `status` VARCHAR(45) NULL,
  `endereço` VARCHAR(100) NULL,
  PRIMARY KEY (`idpedido`),
  INDEX `fk_pedido_massa1_idx` (`massa_idmassa` ASC),
  INDEX `fk_pedido_borda1_idx` (`borda_idborda` ASC),
  INDEX `fk_pedido_pessoa1_idx` (`pessoa_idpessoa` ASC),
  INDEX `fk_pedido_tamanho1_idx` (`tamanho_idtamanho` ASC),
  CONSTRAINT `fk_pedido_massa1`
    FOREIGN KEY (`massa_idmassa`)
    REFERENCES `Pizzaria`.`massa` (`idmassa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_borda1`
    FOREIGN KEY (`borda_idborda`)
    REFERENCES `Pizzaria`.`borda` (`idborda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_pessoa1`
    FOREIGN KEY (`pessoa_idpessoa`)
    REFERENCES `Pizzaria`.`pessoa` (`idpessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_tamanho1`
    FOREIGN KEY (`tamanho_idtamanho`)
    REFERENCES `Pizzaria`.`tamanho` (`idtamanho`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzaria`.`pedido_sabor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzaria`.`pedido_sabor` (
  `pedido_idpedido` INT NOT NULL,
  `sabor_idsabor` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`pedido_idpedido`, `sabor_idsabor`),
  INDEX `fk_pedido_has_sabor_sabor1_idx` (`sabor_idsabor` ASC),
  INDEX `fk_pedido_has_sabor_pedido1_idx` (`pedido_idpedido` ASC),
  CONSTRAINT `fk_pedido_has_sabor_pedido1`
    FOREIGN KEY (`pedido_idpedido`)
    REFERENCES `Pizzaria`.`pedido` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_has_sabor_sabor1`
    FOREIGN KEY (`sabor_idsabor`)
    REFERENCES `Pizzaria`.`sabor` (`idsabor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

ALTER TABLE `pedido` ADD `date` DATE NULL AFTER `endereço`;


INSERT INTO `sabor` (`idsabor`, `sabor`) VALUES (NULL, '4 Queijos'), (NULL, 'Frango com Catupiry'), (NULL, 'Calabresa'), (NULL, 'Lombinho'), (NULL, 'Filé com Cheddar'), (NULL, 'Portuguesa'), (NULL, 'Margherita');

INSERT INTO `tamanho` (`idtamanho`, `tamanho`, `preco`) VALUES ('1', 'Pequeno', '35'), ('2', 'Média', '45'), ('3', 'Grande', '55'), ('4', 'Família', '70');

INSERT INTO `borda` (`idborda`, `borda`) VALUES (NULL, 'Cheddar'), (NULL, 'Catupiry'), (NULL, 'Chocolate');

INSERT INTO `massa` (`idmassa`, `massa`) VALUES (NULL, 'Comum'), (NULL, 'Integral'), (NULL, 'Temperada');

INSERT INTO `pessoa` (`idpessoa`, `nome`, `email`) VALUES (NULL, 'Guilherme Dal Castel', 'guiddalcastel@gmail.com');
INSERT INTO `pessoa` (`idpessoa`, `nome`, `email`) VALUES (NULL, 'Louise Haack', 'louisehaack@gmail.com');

INSERT INTO `usuario` (`pessoa_idpessoa`, `senha`, `perfil`, `token`) VALUES ('1', '25d55ad283aa400af464c76d713c07ad', 'admin', NULL);
INSERT INTO `usuario` (`pessoa_idpessoa`, `senha`, `perfil`, `token`) VALUES ('2', '25d55ad283aa400af464c76d713c07ad', 'cliente', NULL);