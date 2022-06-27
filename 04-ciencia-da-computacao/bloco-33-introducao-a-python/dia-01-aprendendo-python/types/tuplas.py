greate_chess_players = ['Erickson', 'Anna', 'Indio']

world_champion = ('Magnus Carlsen', 1)

greate_chess_players_ranking = [world_champion]

greate_chess_players_ranking.append(('Fabiano Caruana', 2))

greate_chess_players_ranking.extend(
  [
    (greate_chess_players[1], 3),
    (greate_chess_players[0], 4),
    (greate_chess_players[2], 5),
  ]
)

print(greate_chess_players_ranking)
