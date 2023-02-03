-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');
CREATE DATABASE `bananaddict`;

USE `bananaddict`;

CREATE TABLE resultats (
`id` INT NOT NULL AUTO_INCREMENT,
  `prix` int NOT NULL,
  `activité` VARCHAR(200) NOT NULL,
  `equivalent` VARCHAR(200) NOT NULL,
  `image` VARCHAR(200) NOT NULL,
 );

INSERT INTO resultats (prix, activité, equivalent, image) 
VALUES 
(
    '75',
    'musique',
    'jeu vidéo',
    'image1'
  ),
  (
   '150',
   'tricot',
'chaussures',
'image2'
  ),
  (
   '300',
   'amour',
'rollers',
'image3'
  ),
  (
   '750',
   'voyage',
   'sandwiches',
   'image4'
  );

-- INSERT INTO
--   resultats (prix, activité, equivalent, image)
-- VALUES
-- (
--     '75',
--     'Jouer de l harmonica pour penser à autre chose.',
--     'Acheter un jeu Switch je conseille Breath of the Wild',
--     'image1'
--   ),
--   (
--    '150',
--    'Apprendre le tricot, c est une bonne activité pour penser à autre chose, ne pas associer à la verveine car risque de somnolence.'
-- 'Acheter de belles chaussures taille 42, enfin, après, ça dépend de ta pointure hein, je juge pas.'
-- 'image2'
--   ),
--   (
--    '300',
--    'S adonner aux joies de l amour, car à présent tu as la forme d un.e athlète'
-- 'Acheter des rollers détachables. C est pratique et très cher. Les gens verront que tu possèdes des thunes et que tu as des trucs, et ils auront envie d avoir des trucs aussi',
-- 'image3'
--   ),
--   (
--    '750',
--    'Là tu peux faire absolument tout ce que tu veux, comme un trecking humanitaire au Darfimbabwour, ou un festival techno hardocre trance jazz lombric. Une expérience à vivre un fois dans sa vie.',
--    'Tu peux acheter 180 Big Mac. Mais ne le fais pas.',
--    'image4'
--   ),
  