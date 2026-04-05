export interface Booth {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  votersCount?: number;
  areaCovered?: string[];
}

export const booths: Booth[] = [
  { id: 1, name: "Panchayat Union Middle School, Neikulam", address: "Neikulam, Lalgudi Constituency, Tiruchirappalli", lat: 11.057194, lng: 78.838389, votersCount: 1238, areaCovered: ["Neikulam (R.V) And (P), Ward-1 Poosari Street", "Neikulam (R.V) and (P), Ward-1 Mela Veethi", "Neikulam (R.V) And (P), Ward-2 Harijana Street", "Neikulam (R.V) and (P), Ward-2 North Street"] },
  { id: 2, name: "Panchayat Union Elementary School, Nedungur", address: "Nedungur, Lalgudi Constituency, Tiruchirappalli", lat: 11.0635, lng: 78.825389, votersCount: 899, areaCovered: ["Neikulam (R.V) and (P), Ward 1 South Street", "Neikulam (R.V) and (P), Ward 1 West Street", "Neikulam (R.V) and (P), Ward 1 Nadu Theru", "Neikulam (R.V) and (P), Ward 2 North Street", "Neikulam (R.V) and (P), Ward 2 Harijana Theru", "Neikulam (R.V) and (P), Ward 2 Chokkalinga Puram"] },
  { id: 3, name: "Panchayat Union Elementary School, Ottathur (North)", address: "Ottathur, Lalgudi Constituency, Tiruchirappalli", lat: 11.071, lng: 78.855306, votersCount: 834, areaCovered: ["Ottathur, Ward 3 Mariamman Kovil Theru", "Ottathur, Ward 5 Mottaiyan Colony", "Ottathur, Ward 5 Amman Colony", "Ootathur  (R.V) and (P), WARD 5 DHNDAPANI NAGAR"] },
  { id: 4, name: "Panchayat Union Elementary School, Ottathur (South)", address: "Ottathur, Lalgudi Constituency, Tiruchirappalli", lat: 11.071, lng: 78.855306, votersCount: 876, areaCovered: ["Ottathur, Ward 4 South Veethi", "Ottathur, Ward 5 Keela Raja Veethi"] },
  { id: 5, name: "Panchayat Union Elementary School, Oottathur (South)", address: "Oottathur, Lalgudi Constituency, Tiruchirappalli", lat: 11.071306, lng: 78.855389, votersCount: 612, areaCovered: ["Oottathur, Ward 6 Harijana Theru", "Oottathur, Ward 3 Amman Colony", "Oottathur, Ward 3 Periya Theru"] },
  { id: 6, name: "Panchayat Union Elementary School, Oottathur (Middle)", address: "Oottathur, Lalgudi Constituency, Tiruchirappalli", lat: 11.071306, lng: 78.855389, votersCount: 687, areaCovered: ["Oottathur, Ward-1 Perumal Kovil Street"] },
  { id: 7, name: "Panchayat Union Elementary School, Nambukurichi", address: "Nambukurichi, Lalgudi Constituency, Tiruchirappalli", lat: 11.060389, lng: 78.866611, votersCount: 875, areaCovered: ["Nambukurichi, Ward 1 Reddiyar Theru", "Nambukurichi, Ward 1 Kurumbar Theru", "Nambukurichi, Ward 2 Harijana Theru East", "Nambukurichi, Ward 3 Harijana Colony Theru"] },
  { id: 8, name: "Panchayat Union Middle School (SSA), Thiranipalayam (South)", address: "Thiranipalayam, Lalgudi Constituency, Tiruchirappalli", lat: 11.089056, lng: 78.878194, votersCount: 440, areaCovered: ["Theranipalayam (R.V) and (P), Ward 1 Keelamale Theru Vadapuram", "Theranipalayam (R.V) and (P), WARD 1 KEELAMALE THERU VADAPURAM SECOND SANTHU", "Theranipalayam (R.V) and (P), WARD 1 KEELAMALE THERU VADAPURAM THIRD SANTHU", "Theranipalayam (R.V) and (P), WARD 1 KEELAMALE THERU THENPURAM FOURTH SANTHU", "Theranipalayam (R.V) and (P), WARD 1 KEELAMALE THERU THENPURAM 5TH THERU", "Theranipalayam (R.V) and (P), WARD 1 KEELAMALE THERU THENPURAM SIXTH SANTHU", "Theranipalayam (R.V) and (P), WARD 1 KEELAMALE THERU THENPURAM SEVENTH SANTHU"] },
  { id: 9, name: "Panchayat Union Middle School (SSA), Thiranipalayam (East)", address: "Thiranipalayam, Lalgudi Constituency, Tiruchirappalli", lat: 11.089056, lng: 78.878194, votersCount: 1148, areaCovered: ["Theranipalayam (R.V) and (P), WARD 2 THROWPATHI AMMAN KOVIL", "Theranipalayam (R.V) and (P), WARD 3 THROWPATHI AMMAN KOVIL THERU", "Theranipalayam (R.V) and (P), WARD 3 AMMAN KOVIL NORTH THERU", "Theranipalayam (R.V) and (P), WARD 4 AMMAN KOVIL THERU", "Theranipalayam (R.V) and (P), WARD 4 UKKALUR MELATH THERUS", "Theranipalayam (R.V) and (P), WARD 4 UKKALUR PERIYAR NAGAR", "Theranipalayam (R.V) and (P), Ward 4 nallur north theru", "Theranipalayam (R.V) and (P), WARD 4 NALLUR HARIJANA THERU"] },
  { id: 10, name: "Panchayat Union Elementary School, Garudamangalam", address: "Garudamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 11.084806, lng: 78.918806, votersCount: 948, areaCovered: ["Karudamangalam North (R.V) and (P), Ward 1 Kudi", "Karudamangalam North (R.V) and (P), WARD 1 HARIJANA THERU", "Karudamangalam North (R.V) and (P), WARD 2 MELA THERU", "Karudamangalam North (R.V) and (P), WARD 2 SIVANKOLVIL THERU", "Karudamangalam North (R.V) and (P), WARD 2 NADU THERU", "Karudamangalam North (R.V) and (P), KEELA THERU"] },
  { id: 11, name: "Panchayat Union Middle School, Azhundhalaipur (West)", address: "Azhundhalaipur, Lalgudi Constituency, Tiruchirappalli", lat: 11.050694, lng: 78.890889, votersCount: 993, areaCovered: ["Karudamangalam South (R.V) Alunthalaippur (P), Ward-3 North Street", "Karudamangalam South (R.V) Alunthalaippur (P), WARD-5 PARA STREET"] },
  { id: 12, name: "Panchayat Union Middle School, Azhundhalaipur (East)", address: "Azhundhalaipur, Lalgudi Constituency, Tiruchirappalli", lat: 11.050694, lng: 78.890889, votersCount: 778, areaCovered: ["Karudamangalam South (R.V) Alunthalaippur (P), WARD-4 SOUTH STREET", "Karudamangalam South (R.V) Alunthalaippur (P), WARD-5 SAKKIIYAR STREET"] },
  { id: 13, name: "Panchayat Union Middle School, Saradamangalam (South)", address: "Saradamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 11.050694, lng: 78.890889, votersCount: 562, areaCovered: ["Saradamangalam (R.V) and (P), Ward 1 North Street", "Saradamangalam (R.V) and (P), WARD 1 NADU THERU"] },
  { id: 14, name: "Panchayat Union Middle School, Saradamangalam (North)", address: "Saradamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 11.050611, lng: 78.959111, votersCount: 713, areaCovered: ["Saradamangalam (R.V) and (P), WARD 2 SOUTH THERU", "Saradamangalam (R.V) and (P), WARD 2 KEELA THERU", "Saradamangalam (R.V) and (P), WARD 2 HARIJANA THERU"] },
  { id: 15, name: "Panchayat Union Elementary School, M.Kannanur (North)", address: "M.Kannanur, Lalgudi Constituency, Tiruchirappalli", lat: 11.075694, lng: 78.969694, votersCount: 602, areaCovered: ["M. Kannanur (R.V) and (P), Ward 1 Mariamman Kovil Theru", "M. Kannanur (R.V) and (P), WARD 1 MANDAYA THERU", "M. Kannanur (R.V) and (P), WARD 1 SOUTH VEETHI"] },
  { id: 16, name: "Panchayat Union Elementary School, M.Kannanur (South)", address: "M.Kannanur, Lalgudi Constituency, Tiruchirappalli", lat: 11.075694, lng: 78.970361, votersCount: 852, areaCovered: ["M. Kannanur (R.V) and (P), WARD 2 KEELA GOUNDER THERU", "M. Kannanur (R.V) and (P), WARD 2 HARIJANA THERU"] },
  { id: 17, name: "Panchayat Union Elementary School, Orathur (West)", address: "Orathur, Lalgudi Constituency, Tiruchirappalli", lat: 11.059611, lng: 78.981306, votersCount: 1198, areaCovered: ["Orathur (R.V) and (P), Ward 1 Orathur Kudi Theru", "Orathur (R.V) and (P), WARD 1 ORATHUR HARIJANA THERU", "Orathur (R.V) and (P), WARD 2 SATHAPPADI KUDI THERU"] },
  { id: 18, name: "Panchayat Union Elementary School, Orathur (East)", address: "Orathur, Lalgudi Constituency, Tiruchirappalli", lat: 11.059611, lng: 78.981306, votersCount: 536, areaCovered: ["Orathur (R.V) and (P), WARD 2 SATHAPPADI HARIJANA THERU", "Orathur (R.V) and (P), WARD 3 SILUVAIPATTI"] },
  { id: 19, name: "Govt. Higher Secondary School, Kallagam (East)", address: "Kallagam, Lalgudi Constituency, Tiruchirappalli", lat: 11.031194, lng: 79.006, votersCount: 740, areaCovered: ["Kallagam (R.V) and (P), Ward 1 Harijana Theru", "Kallagam (R.V) and (P), WARD 2 MADHA KOVIL THERU", "Kallagam (R.V) and (P), WARD 3 PALLA THERU", "Kallagam (R.V) and (P), WARD 1 NORTH THERU"] },
  { id: 20, name: "Govt. Higher Secondary School, Kallagam (New East)", address: "Kallagam, Lalgudi Constituency, Tiruchirappalli", lat: 11.031194, lng: 79.006, votersCount: 714, areaCovered: ["Kallagam (R.V) and (P), WARD 2 MARIAMMAN KOVIL THERU", "Kallagam (R.V) and (P), WARD 2 MUSLIM THERU"] },
  { id: 21, name: "Govt. Higher Secondary School, Kallagam (East-2)", address: "Kallagam, Lalgudi Constituency, Tiruchirappalli", lat: 11.031194, lng: 79.006, votersCount: 905, areaCovered: ["Kallagam (R.V) and (P), Ward 3 Kaliyamman Kovil Theru", "Kallagam (R.V) and (P), WARD 4 MELA THERU", "Kallagam (R.V) and (P), WARD 4 PURUNS NAGAR"] },
  { id: 22, name: "Panchayat Union Middle School, Keela Arasur (Middle)", address: "Keela Arasur, Lalgudi Constituency, Tiruchirappalli", lat: 11.006, lng: 78.979194, votersCount: 921, areaCovered: ["Keela Arasur (R.V) and (P), Ward-1 North Street", "Keela Arasur (R.V) and (P), Ward-1 North Middle Street", "Keela Arasur (R.V) and (P), Ward-1 South Middle Street", "Keela Arasur (R.V) and (P), WARD-2 South Street", "Keela Arasur (R.V) and (P), WARD-2 Indhira Nagar"] },
  { id: 23, name: "Panchayat Union Middle School, Keela Arasur (West)", address: "Keela Arasur, Lalgudi Constituency, Tiruchirappalli", lat: 11.006, lng: 78.979194, votersCount: 1048, areaCovered: ["Keela Arasur (R.V) and (P), Ward 3 Harijana Theru", "Keela Arasur (R.V) and (P), WARD 4 AMARASUR KEELA VEETHI", "Keela Arasur (R.V) and (P), WARD-3 SOUTH NORTH STREET", "Keela Arasur (R.V) and (P), WARD 4 MELA THERU", "Keela Arasur (R.V) and (P), WARD 4 THENNARASUR", "Keela Arasur (R.V) and (P), WARD 4 SAKKIIYAR THERU", "Keela Arasur (R.V) and (P), WARD 4 VELNAGAR"] },
  { id: 24, name: "Panchayat Union Middle School, Mela Arasur (East)", address: "Mela Arasur, Lalgudi Constituency, Tiruchirappalli", lat: 11.023111, lng: 78.9595, votersCount: 778, areaCovered: ["Mela Arasur (R.V) and (P), Ward-1 North Street", "Mela Arasur (R.V) and (P), WARD 2 NADU THERU", "Mela Arasur (R.V) and (P), WARD 2 SOUTH THERU", "Mela Arasur (R.V) and (P), WARD 2 MELA THERU"] },
  { id: 25, name: "Panchayat Union Middle School, Mela Arasur (West)", address: "Mela Arasur, Lalgudi Constituency, Tiruchirappalli", lat: 11.023111, lng: 78.960167, votersCount: 1156, areaCovered: ["Mela Arasur (R.V) and (P), Ward-3 East Street", "Mela Arasur (R.V) and (P), WARD-4 Kalliyamman Kovil Street", "Mela Arasur (R.V) and (P), WARD-3 Main Road"] },
  { id: 26, name: "Panchayat Union Elementary School, Malvoi (West)", address: "Malvoi, Lalgudi Constituency, Tiruchirappalli", lat: 11.047306, lng: 78.961389, votersCount: 842, areaCovered: ["Malvaai (R.V) and (P), Ward 1 Vadakku Veethi", "Malvaai (R.V) and (P), WARD 2 NANDAPA VEETHI", "Malvaai (R.V) and (P), WARD 2 NADU VEETHI", "Malvaai (R.V) and (P), WARD 3 KEELA VEETHI"] },
  { id: 27, name: "Panchayat Union Elementary School, Malvoi (South)", address: "Malvoi, Lalgudi Constituency, Tiruchirappalli", lat: 11.047306, lng: 78.961389, votersCount: 911, areaCovered: ["Malvaai (R.V) and (P), WARD 3 KARNAM VEETHI", "Malvaai (R.V) and (P), WARD 3 RAMASAMY VEETHI", "Malvaai (r-v) and (p), WARD 3 south veethi", "Malvaai (R.V) and (P), WARD 3 MELA VEETHI"] },
  { id: 28, name: "Panchayat Union Elementary School, Malvoi (North)", address: "Malvoi, Lalgudi Constituency, Tiruchirappalli", lat: 11.047306, lng: 78.961389, votersCount: 689, areaCovered: ["Sadurbagam (R.V) and Malvaay (P), Ward 4 Kudi Theru", "Sadurbagam (R.V) and Malvaay (P), WARD 4 HARIJANA THERU"] },
  { id: 29, name: "Panchayat Union Elementary School, Varakuppai", address: "Varakuppai, Lalgudi Constituency, Tiruchirappalli", lat: 11.021389, lng: 78.925444, votersCount: 1000, areaCovered: ["Varakuppai (r-v) and (p), Ward 1 Vadapuram Vadakku Veethi", "Varakuppai (R.V) and (P), WARD 1 KUDI THERU", "Varakuppai (R.V) and (P), WARD 1 KEELA VEETHI", "Varakuppai (r-v) and (p), Ward 2 harijana theru"] },
  { id: 30, name: "Panchayat Union Elementary School, Sirukalappur (Terraced)", address: "Sirukalappur, Lalgudi Constituency, Tiruchirappalli", lat: 11.045611, lng: 78.901, votersCount: 689, areaCovered: ["Sirukalappur (R.V) and (P), Ward-1 Kela Street", "Sirukalappur (R.V) and (P), Ward-2 Middle Street", "Sirukalappur (R.V) and (P), Ward-3 North Street"] },
  { id: 31, name: "Panchayat Union Elementary School, Sirukalappur (Tiled)", address: "Sirukalappur, Lalgudi Constituency, Tiruchirappalli", lat: 11.045611, lng: 78.901, votersCount: 862, areaCovered: ["Sirukalappur (R.V) and (P), Ward-3 South Street", "Sirukalappur (R.V) and (P), Ward-3 Harijana Street"] },
  { id: 32, name: "Panchayat Union Elementary School, Peruvalappur (West)", address: "Peruvalappur, Lalgudi Constituency, Tiruchirappalli", lat: 11.018, lng: 78.870111, votersCount: 983, areaCovered: ["Peruvalappur (R.V) and (P), Ward-3,4 South Street", "Peruvalappur (R.V) and (P), Ward-3 West Street"] },
  { id: 33, name: "Panchayat Union Elementary School, Peruvalappur (South)", address: "Peruvalappur, Lalgudi Constituency, Tiruchirappalli", lat: 11.018, lng: 78.870111, votersCount: 587, areaCovered: ["Peruvalappur (R.V) and (P), Ward-3,1 East Street", "Peruvalappur (R.V) and (P), Ward-4 Anna Nagar"] },
  { id: 34, name: "Panchayat Union Elementary School, Peruvalappur (East)", address: "Peruvalappur, Lalgudi Constituency, Tiruchirappalli", lat: 11.018, lng: 78.870111, votersCount: 534, areaCovered: ["Peruvalappur (R.V) and (P), Ward 5 Nadu Theru", "Peruvalappur (r-v) and (p), Ward 2 vadakku veethi"] },
  { id: 35, name: "Panchayat Union Elementary School, Peruvalappur (North)", address: "Peruvalappur, Lalgudi Constituency, Tiruchirappalli", lat: 11.018, lng: 78.870111, votersCount: 791, areaCovered: ["Peruvalappur (r-v) and (p), Ward 6 harijana theru", "Peruvalappur (R.V) and (P), WARD 6 SAMINATHAPURAM COLONY"] },
  { id: 36, name: "Panchayat Union Middle School, Periya Kurukkai (West)", address: "Periya Kurukkai, Lalgudi Constituency, Tiruchirappalli", lat: 11.035222, lng: 78.825694, votersCount: 984, areaCovered: ["Periya Kurukkai (R.V) and (P), Ward-1 North Street", "Periya Kurukkai (R.V) and (P), Ward-1 Nadu Street", "Periya Kurukkai (R.V) and (P), Ward-1 kurumbar Street", "Periya Kurukkai (R.V) and (P), Ward-3 South Street", "Periya Kurukkai (R.V) and (P), Ward-3 Keela Street", "Periya Kurukkai (R.V) and (P), Ward-3 Vaihan Kudi Lane", "Periya Kurukkai (R.V) and (P), Ward-3 Annamalai Goundar Street", "Periya Kurukkai (R.V) and (P), Ward-2 Pandaram Lane", "Periya Kurukkai (R.V) and (P), Ward-2 Muthuraja Street", "Periya Kurukkai (R.V) and (P), Ward-2 Mela Street"] },
  { id: 37, name: "Panchayat Union Middle School, Periya Kurukkai (East)", address: "Periya Kurukkai, Lalgudi Constituency, Tiruchirappalli", lat: 11.035222, lng: 78.825694, votersCount: 765, areaCovered: ["Periya Kurukkai (R.V) and (P), Ward 4 Kuthiraikkaaran Santhu", "Periya Kurukkai (R.V) and (P), WARD 4 DIMMANI SANTHU", "Periya kurukkai (r-v) and (p) Ward 5 sakkiiliyar theru", "Periya Kurukkai (R.V) and (P), WARD 5 COLONY THERU", "Periya Kurukkai (R.V) and (P), WARD 4 KEELA THERU", "Periya Kurukkai (R.V) and (P), WARD 3 SANMDAN SANTHU", "Periya Kurukkai (R.V), WARD 4 EARIPPATHAI"] },
  { id: 38, name: "Panchayat Union Middle School, Reddimangudi (South)", address: "Reddimangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.996944, lng: 78.826111, votersCount: 1102, areaCovered: ["Reddimangudi (R.V) and (P), Ward 1 VALAKAI", "Reddimangudi (r-v) and (p), Ward 1 perumal kovil Theru", "Reddimangudi (R.V) and (P), WARD 12 THATCHANKIRCHI ROAD THERU", "Reddimangudi (R.V) and (P), WARD 3 PILLAIYAR KOVIL THERU", "Reddimangudi (R.V) and (P), WARD 2 NADU THERU", "Reddimangudi (R.V) and (P), WARD 3 EAST THERU", "Reddimangudi (R.V) and (P), WARD 1 SIVAN KOVIL THERU", "Reddimangudi (R.V) and (P), WARD 2 SOUTH THERU", "Reddimangudi (r-v) and (p), Ward 1 omalai nagar"] },
  { id: 39, name: "Panchayat Union Middle School, Reddimangudi (East)", address: "Reddimangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.996944, lng: 78.826208, votersCount: 1209, areaCovered: ["Reddimangudi (R.V) AND (P), Ward 3 Mutharaiyar Theru", "Reddimangudi (R.V) AND (P), WARD 4 PARATHI THERU", "Reddimangudi (R.V) AND (P), WARD 4 PALLAR THERU", "Reddimangudi (R.V) AND (P), WARD 4 SAKKIILIYAR THERU", "Reddimangudi (R.V) AND (P), WARD 3 KEELA THERU", "Reddimangudi (R.V) AND (P), WARD 3 SOUTH THERU", "Reddimangudi (R.V) AND (P), WARD 2 MANIKANDAM"] },
  { id: 40, name: "Panchayat Union Elementary School, Kulakudi", address: "Kulakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.989611, lng: 78.843500, votersCount: 750, areaCovered: ["Kannakudi (R.V) and Kulakudi (P), Ward 3 South Theru", "Kannakudi (R.V) and Kulakudi (P), WARD 3 GOUNDER THERU", "Kannakudi (R.V) and Kulakudi (P), Ward 3 Munusamy Theru", "Kannakudi (r.v) and Kulakudi (P), WARD 3 malikudi nagar"] },
  { id: 41, name: "Adi Dravidar Welfare Elementary School, Kannakudi (North)", address: "Kannakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.989611, lng: 78.843500, votersCount: 670, areaCovered: ["Kannakudi (R.V) AND (P), Ward-1 North Street", "Kannakudi (R.V) AND (P), Ward-1 Middle Street", "Kannakudi (R.V) AND (P), Ward-1 Mariyamman Kovil Street", "Kannakudi (R.V) and (P), Ward-1 Mela Street"] },
  { id: 42, name: "Adi Dravidar Welfare Elementary School, Kannakudi (West)", address: "Kannakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.970306, lng: 78.855694, votersCount: 666, areaCovered: ["Kannakudi (R.V) and (P), Ward-2 Paraiyar Street", "Kannakudi (R.V) and (P), Ward-2 Sakkiiyar Street", "Kannakudi (R.V) and (P), Ward-2 Sebaitiyar Kovil Street", "Kannakudi (R.V) and (P), Ward-2 Middle Street", "Kannakudi (R.V) AND (P), Ward-2 South Street", "Kannakudi (R.V) AND (P), Ward-2 Mettu Street"] },
  { id: 43, name: "Little Flower RC Middle School, Vandalai", address: "Vandalai, Lalgudi Constituency, Tiruchirappalli", lat: 10.978611, lng: 78.873611, votersCount: 888, areaCovered: ["Vanthalai Koodalur (R.V) and (P), Ward 1 Vadakku Street", "Vanthalai Koodalur (R.V) and (P), Ward 1 THERKU THERU", "Vanthalai Koodalur (R.V) and (P), Ward 1 Arijana Street", "Vanthalai Koodalur (R.V) and (P), Ward 1 Vidudhalsipuram", "Vanthalai Koodalur (R.V) and (P), Ward 1 North Street", "Vanthalai Koodalur (R.V) and (P), Ward 1 Nada Street"] },
  { id: 44, name: "Panchayat Union Elementary School, Koodalur", address: "Koodalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.970306, lng: 78.886444, votersCount: 833, areaCovered: ["Vanthalai Koodalur (R.V) and (P), WARD 2 VADAPURAM NADU THERU", "Vanthalai Koodalur (R.V) and (P), WARD 3 THENPURAM NADU THERU"] },
  { id: 45, name: "Panchayat Union High School, Koodalur", address: "Koodalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.970389, lng: 78.886111, votersCount: 817, areaCovered: ["Vanthalai Koodalur (R.V) and (P), Ward 2 VADAKKU THERU", "Vanthalai Koodalur (R.V) and (P), WARD 4 HARIJANA THERU", "Vanthalai Koodalur (R.V) and (P), WARD 4 KOODALUR NADU THERU"] },
  { id: 46, name: "Panchayat Union Elementary School, Siruvayalur", address: "Siruvayalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.986694, lng: 78.891806, votersCount: 979, areaCovered: ["Kaanagiiyanalur (R.V) and Siruvayalur (P), Ward 3 North Theru", "Kaanagiiyanalur (r-v) and siruvayalur (p), Ward 3 south theru", "Kaanagiiyanalur (R.V) and Siruvayalur (P), WARD 3 KEELA THERU", "Kaanagiiyanalur (R.V) and Siruvayalur (P), WARD 3 NADU THERU", "Kaanagiiyanalur (R.V) and Siruvayalur (P), WARD-4 SAVARIYAR KOVIL STREET"] },
  { id: 47, name: "Panchayat Union Elementary School, Kanakiliyanallur (North-South)", address: "Kanakiliyanallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.986694, lng: 78.891806, votersCount: 587, areaCovered: ["Kaanagiiyanalur (R.V) and (P), WARD 2 KEELA THERU", "Kaanagiiyanalur (R.V) and (P), WARD 1 PERUMAL KOVIL THERU", "Kaanagiiyanalur (r-v) and (p), Ward 1 west theru", "Kaanagiiyanalur (R.V) and (P), WARD 1 KEELA THERU KELPURAM", "Kaanagiiyanalur (R.V) and (P), WARD 1 THERKU VEETHI", "Kaanagiiyanalur (R.V) and (P), WARD 1 SAMATHUVAPURAM"] },
  { id: 48, name: "Panchayat Union Elementary School, Kanakiliyanallur (East-West)", address: "Kanakiliyanallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.993444, lng: 78.880639, votersCount: 669, areaCovered: ["Kaanagiiyanalur (R.V) and (P), WARD 2 MELPURAM NADU THERU", "Kaanagiiyanalur (R.V) and (P), WARD 3 VADAKKU VEETHI", "Kaanagiiyanalur (R.V) and (P), WARD 2 MUSLIM THERU", "Kaanagiiyanalur (R.V) and (P), WARD 2 HARIJANA THERU"] },
  { id: 49, name: "Panchayat Union Middle School, Thappai (East)", address: "Thappai, Lalgudi Constituency, Tiruchirappalli", lat: 10.989500, lng: 78.912333, votersCount: 475, areaCovered: ["Thappai (R.V) and (P), Ward 1 Keela Veethi", "Thappai (R.V) and (P), WARD 1 THERKU THERU", "Thappai (R.V) and (P), WARD 2 PUDU PILLAIYAK KOVIL THERU"] },
  { id: 50, name: "Panchayat Union Middle School, Thappai (West)", address: "Thappai, Lalgudi Constituency, Tiruchirappalli", lat: 10.989500, lng: 78.912333, votersCount: 908, areaCovered: ["Thappai (R.V) and (P), WARD 2 NADU THERU", "Thappai (R.V) and (P), WARD 2 NADU VEETHI", "Thappai (R.V) and (P), WARD 2 PALANIYANDI KOVIL THERU", "Thappai (r.v) and (p), Ward 2 SAVARIYAR KOVIL THERU"] },
  { id: 51, name: "St. Saveriyar Middle School, Kallakudi (North-1)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.977500, lng: 78.950389, votersCount: 784, areaCovered: ["St. Saveriyar Middle School Kallakudi, Ward 1 Kudi Theru", "Kallakudi (R.V) and (I P), WARD 2 POUNDU THERU", "Kallakudi (R.V) and (I P), WARD 3 KULATHERU", "Kallakudi (R.V) and (I P), WARD 3 OOPANAAR SANTHU", "Kallakudi (r-v) and (i- p), Ward 7 mela theru"] },
  { id: 52, name: "St. Saveriyar Middle School, Kallakudi (South-1)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.977500, lng: 78.950389, votersCount: 796, areaCovered: ["Kallakudi (R.V) and (T. P), WARD 3 PALINGA NATHAM ROAD", "Kallakudi (R.V) and (T. P), WARD 4 OFFICE THERU"] },
  { id: 53, name: "St. Saveriyar Middle School, Kallakudi (South-2)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.977500, lng: 78.950389, votersCount: 842, areaCovered: ["Kallakudi (R.V) and (T.P), Ward 2,3 Keela Veethi", "Kallakudi (R.V) and (T.P), WARD 2,3 SIVAN KOVIL THERU", "Kallakudi (R.V) and (T.P), WARD 2 KARNAM SANTHU", "Kallakudi (R.V) and (T.P), WARD 13 MELA VEETHI"] },
  { id: 54, name: "Saraswathi Vidayalaya School, Kalvinagar, Kallakudi", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.986278, lng: 78.952444, votersCount: 846, areaCovered: ["Kallakudi (R.V) and (T.P), WARD 14 CHIDAMBARAM SALAI", "Kallakudi (R.V) and (T.P), WARD 14 THIRUVALLUVAR NAGAR", "Kallakudi (r and (T P), WARD 15 PERIYAR SAMATHUVAPURAM", "Kallakudi (R.V) and (T.P), WARD 15 THIDEERKUPPAM (K.K. NAGAR)"] },
  { id: 55, name: "St. Saveriyar Middle School, Kallakudi (North-2)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.977500, lng: 78.950500, votersCount: 1017, areaCovered: ["Kallakudi (R.V) and (I P), Ward 14 Kalla Mettu Theru", "Kallakudi (R.V) and (I P), WARD 15 THIRUVALLUVAR NAGAR", "Kallakudi (R.V) and (I P), WARD 15 ARIYALUR ROAD", "Kallakudi (R.V) and (I P), WARD 15 PERIYAR SAMADHUVAPURAM"] },
  { id: 56, name: "St. Saveriyar Middle School, Kallakudi (Middle)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.977500, lng: 78.950500, votersCount: 968, areaCovered: ["Kallakudi (R.V) and (T.P), WARD 13 KALIAPPAN COLONY", "Kallakudi (R.V) and (T.P), WARD 2 CHURCH THERU", "Kallakudi (R.V) and (T.P), WARD 12 MUTHALIYAR SANTHU", "Kallakudi (R.V) and (T.P), WARD 1 PUDUVAAKKARAI ROADS", "Kallakudi (R.V) and (T.P), WARD 1 VADAKKU THERU", "Kallakudi (R.V) and (T.P), WARD 14 RAJANAGAR", "Kallakudi (R.V) and (T.P), WARD 15 THIDEERKUPPAM (K.K.NAGAR)", "Kallakudi (R.V) and (T.P), WARD 15 PUTHIYA SAMATHUVAPURAM", "Kallakudi (R.V) and (T.P), WARD 12 MELA THERU"] },
  { id: 57, name: "St. Saveriyar Middle School, Kallakudi (South-3)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.977500, lng: 78.950500, votersCount: 1204, areaCovered: ["Kallakudi (R.V) and (I.P), Ward 1 Otta Theru", "Kallakudi (R.V) and (I.P), WARD 2 MELA THERU", "Kallakudi (R.V) and (I.P), WARD 3 KADAI VEETHI", "Kallakudi (R.V) and (I.P), WARD 4 MAIN ROAD", "Kallakudi (R.V) and (I.P), WARD 5 SAVERIYAR KOVIL THERU", "Kallakudi (R.V) and (I.P), WARD 6 KARUPUDAIYAR COLONY", "Kallakudi (R.V) and (I.P), WARD 7 MISSION THERU"] },
  { id: 58, name: "Dalmia Higher Secondary School, Kallakudi (Auditorium)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.973389, lng: 78.949889, votersCount: 835, areaCovered: ["Dalmia Higher Secondary School, Kallakudi, Ward 6 PILLAIYAR THERU", "Kallakudi (R.V) and (T.P), Ward 6 SILVER JUBLY COLONY", "Kallakudi (R.V) and (T.P), WARD 10 INDUSTRIAL COLONY", "Kallakudi (R.V) and (T.P), Ward 10 Natchimuthitu Colony", "Kallakudi (R.V) and (T.P), Ward 10 Petrolpank opp Chithambaram Chalai"] },
  { id: 59, name: "Dalmia Higher Secondary School, Kallakudi (Room 9)", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.973389, lng: 78.949889, votersCount: 901, areaCovered: ["Kallakudi (R.V) and (T.P), Ward 4,5 Ambal Takies Theru", "Kallakudi (r-v) and (t.p), Ward 9 dalmia colony C- type3", "Kallakudi (R.V) and (T.P), WARD 9 DALMIA COLONY D- TYPE", "Kallakudi (R.V) and (T.P), WARD 5 DALMIA COLONY E- TYPE5", "Kallakudi (R.V) and (T.P), WARD 6,7 DALMIA COLONY G TYPE7", "Kallakudi (R.V) and (T.P), WARD 5,9 DALMIA COLONY POTHU"] },
  { id: 60, name: "Anthoniyar Temple, Palvadi Building, Kallakudi", address: "Kallakudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.975694, lng: 78.950500, votersCount: 1276, areaCovered: ["Kallakudi (R.V) and (I.P), Ward 1 Harijana Theru", "Kallakudi (R.V) and (I.P), WARD 2 DALMIA KADAI VEETHI", "Kallakudi (R.V) and (I.P), WARD 3 ANTHONIYAR KOVIL THERU", "Kallakudi (R.V) and (I.P), WARD 4 KOVIL MANIYAM THERU"] },
  { id: 61, name: "Panchayat Union Middle School, Mudhuvathur (North-South)", address: "Mudhuvathur, Lalgudi Constituency, Tiruchirappalli", lat: 10.975694, lng: 78.950500, votersCount: 704, areaCovered: ["Muthuvathur (R.V) and (P), Ward 1 North Theru", "Muthuvathur (R.V) and (P), Ward 1 MELA THERU", "Muthuvathur (R.V) and (P), WARD 1 NADU THERU", "Muthuvathur (R.V) and (P), WARD 1 SAKKIILIYAR THERU"] },
  { id: 62, name: "Panchayat Union Middle School, Mudhuvathur (East-West)", address: "Mudhuvathur, Lalgudi Constituency, Tiruchirappalli", lat: 10.984139, lng: 78.980861, votersCount: 616, areaCovered: ["Muthuvathur (R.V) and (P), WARD 2 MUTHAPPA UDAIYAR SANTHU", "Muthuvathur (R.V) and (P), WARD 2 SUBRAMANIAM KOVIL THERU", "Muthuvathur (R.V) and (P), WARD 2 SOUTH THERU", "Muthuvathur (R.V) and (P), WARD 2 THOMBAN THERU", "Muthuvathur (R.V) and (P), WARD 2 PARATHERU"] },
  { id: 63, name: "St. Joseph Girls HSS, Vadugarpettai (North-1)", address: "Vadugarpettai, Lalgudi Constituency, Tiruchirappalli", lat: 10.966889, lng: 78.938944, votersCount: 698, areaCovered: ["Govandakurichi (R.V) and (P), Ward 4 V.P. Street", "Govandakurichi (R.V) and (P), Ward 4 north Theru", "Govandakurichi (R.V) and (P), WARD 4 THERADI THERU"] },
  { id: 64, name: "St. Joseph Girls HSS, Vadugarpettai (North-2)", address: "Vadugarpettai, Lalgudi Constituency, Tiruchirappalli", lat: 10.966889, lng: 78.938944, votersCount: 643, areaCovered: ["Govandakurichi (r-v) and (p), Ward 4 mela theru", "Govandakurichi (R.V) and (P), WARD 5 MALLIKAI PURAM", "Govandakurichi (R.V) and (P), WARD 5 MADHAPURAM"] },
  { id: 65, name: "St. Joseph Girls HSS, Vadugarpettai (Middle)", address: "Vadugarpettai, Lalgudi Constituency, Tiruchirappalli", lat: 10.966889, lng: 78.938944, votersCount: 950, areaCovered: ["Govandakurichi (R.V) and (P), Ward 5 Arockiya Purum", "Govandakurichi (R.V) and (P), WARD 5 KAMARAJAPURAM", "Govandakurichi (R.V) and (P), WARD 5 MAIN ROAD", "Govandakurichi (R.V) and (P), WARD 5 SAKTHI VINAYAKAR NAGARS", "Govandakurichi (r-v) and (p), Ward 5 veeramass munivar nagar"] },
  { id: 66, name: "St. Louis RC Middle School, Pullambadi (West)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.942500, lng: 78.906806, votersCount: 1402, areaCovered: ["Pullambadi North (R.V) and (I.P), Ward 5 north veethi", "Pullambadi North (R.V) and (I.P), WARD 4 OTHAI VEEDURKARAN THERU", "Pullambadi North (R.V) and (I.P), WARD 4 ASARI THERU", "Pullambadi North (R.V) and (I.P), WARD 4 MANAKADU", "Pullambadi north (r-v) and (i.p), Ward 4 ivyan kulam santhur", "Pullambadi North (R.V) and (I.P), WARD 4 KARAIYAPPATTY", "Pullambadi North (R.V) and (I.P), WARD 4 SAMUVEL COLONY"] },
  { id: 67, name: "St. Louis RC Middle School, Pullambadi (North)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.942444, lng: 78.906806, votersCount: 1117, areaCovered: ["Pullambadi North (R.V) and (I.P), Ward 4 Atappareddiyar Palam", "Pullambadi North (R.V) and (I.P), WARD 14 POOKARAN THERU"] },
  { id: 68, name: "St. Louis RC Middle School, Pullambadi (South)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.942389, lng: 78.906806, votersCount: 902, areaCovered: ["Pullambadi North (R.V) and (I.P), Ward 2 Ariyalur Road", "Pullambadi North (R.V) and (I.P), WARD 1 THAILAKUALAM", "Pullambadi North (R.V) and (I.P), WARD 4 ARIYALUR ROAD SOUTH", "Pullambadi North (R.V) and (I.P), WARD 1 KAMARAJAR NAGAR"] },
  { id: 69, name: "Govt. HSS, Pullambadi (South-1st Room)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.938278, lng: 78.906389, votersCount: 881, areaCovered: ["Pullambadi South (R.V) and (T.P), Ward 15 Ivvavu Udaiyar Chathira Theru", "Pullambadi South (R.V) and (T.P), WARD 15 KANNASWAMY THERU", "Pullambadi South (R.V) and (T.P), WARD 14 MADATHU THERU", "Pullambadi South (R.V) and (T.P), WARD 14 MISSION THERU", "Pullambadi South (R.V) and (T.P), WARD 7 THIRUMALABADI ROADS", "Pullambadi South (R.V) and (T.P), WARD 14 PONNUSAMY UDAIYAR SANTHU", "Pullambadi South (R.V) and (T.P), WARD 15 CHATHIRATHAN THERU"] },
  { id: 70, name: "Govt. HSS, Pullambadi (South-2nd Room)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.938278, lng: 78.906389, votersCount: 918, areaCovered: ["Pullambadi South (R.V) and (I.P), WARD 14 PILLAIYAR KOVIL THERU", "Pullambadi South (R.V) and (I.P), WARD 14 KUNJU MUTHALIYAR THERU", "Pullambadi South (R.V) and (I.P), WARD 14 GURUSAMY UDAIYAR THERU", "Pullambadi South (R.V) and (I.P), WARD 14 SAAVADI THERU", "Pullambadi South (R.V) and (I.P), WARD 5 VADAKKU THERU", "Pullambadi South (R.V) and (I.P), WARD 2 ANNA NAGAR", "Pullambadi South (R.V) and (I.P), WARD 8 ATHURAAN SANTHU", "Pullambadi South (R.V) and (I.P), WARD 8 KEELA VEETHI", "Pullambadi South (R.V) and (I.P), WARD 8 MELA VEETHI", "Pullambadi South (R.V) and (I.P), WARD 11 VANNAARA THERU", "Pullambadi South (R.V) and (I.P), WARD 11 MARIAMMAN KOVIL THERU"] },
  { id: 71, name: "Govt. HSS, Pullambadi (North-3rd Room)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.938222, lng: 78.906389, votersCount: 824, areaCovered: ["Pullambadi South (R.V) and (I.P), Ward 7 THIRUMALABADI STREET", "Pullambadi south (r-v) and (i.p), Ward 10 koothaperumal koli veethi"] },
  { id: 72, name: "Govt. HSS, Pullambadi (SSA Room 5)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.938167, lng: 78.906389, votersCount: 724, areaCovered: ["Pullambadi south (r-v) and (i.p), Ward 13 nadu veethi", "Pullambadi South (R.V) and (I.P), WARD 13 KEERIKARUPPPAN SANTHU", "Pullambadi South (R.V) and (I.P), WARD 13 SATHIYANATHAN SANTHU", "Pullambadi south (r-v) and (i.p), Ward 12 therudum street5", "Pullambadi South (R.V) and (I.P), WARD 12 MUTHIRAIYAR STREET", "Pullambadi South (R.V) and (I.P), WARD 12 PULIYA SATHAN SANTHU", "Pullambadi South (R.V) and (I.P), WARD 7 KRISHNAN COLONY"] },
  { id: 73, name: "Govt. HSS, Pullambadi (West-Small Saving)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.938111, lng: 78.906389, votersCount: 921, areaCovered: ["Pullambadi South (R.V) and (I.P), WARD 12 AGRAKARAM ROAD", "Pullambadi South (R.V) and (I.P), WARD 12 ERUMAIKARAN SANTHU", "Pullambadi South (R.V) and (I.P), WARD 12 KALLUKOTHAN SANTHU", "Pullambadi South (R.V) and (I.P), WARD 6 UDHAIYA NAGAR"] },
  { id: 74, name: "Govt. HSS, Pullambadi (East-Small Saving)", address: "Pullambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.938056, lng: 78.906389, votersCount: 753, areaCovered: ["Pullambadi South (R.V) and (I.P), WARD 3 RAJIVGANDHI NAGAR", "Pullambadi South (R.V) and (I.P), WARD 8 IVYARAR THERU", "Pullambadi South (R.V) and (I.P), WARD 10 VETTHU THERU", "Pullambadi South (R.V) and (I.P), WARD 10 SOUTH VEETHS", "Pullambadi South (R.V) and (I.P), WARD 9 VALLUVAR VEETHI", "Pullambadi South (R.V) and (I.P), WARD 9 NORTH VEETHI", "Pullambadi South (R.V) and (I.P), WARD 8 ATHURAAN SANTHU", "Pullambadi South (R.V) and (I.P), WARD 10 MARIAMMAN KOVIL THERU"] },
  { id: 75, name: "Panchayat Union Elementary School, Punjai Sangenthi", address: "Punjai Sangenthi, Lalgudi Constituency, Tiruchirappalli", lat: 10.916694, lng: 78.877083, votersCount: 815, areaCovered: ["Punjai sankendhi (r-v) and (p), Ward 1 mela theru", "Punjai Sankendhi (R.V) and (P), WARD 1 NADU THERU", "Punjai Sankendhi (R.V) and (P), WARD 1 THERKU THERU Punjai Sankendhi (R.V) and (P), WARD 2 KEELA THERU", "Punjai Sankendhi (R.V) and (P), WARD 2 HARIJANA THERU"] },
  { id: 76, name: "Govt. High School, Punjai Sangenthi (1)", address: "Punjai Sangenthi, Lalgudi Constituency, Tiruchirappalli", lat: 10.916694, lng: 78.877083, votersCount: 648, areaCovered: ["Punjai Sankendhi (R.V) and (P), Ward 3 VADAKKU THERU", "Punjai Sankendhi (R.V) and (P), WARD 3 NADU THERU", "Punjai Sankendhi (R.V) and (P), WARD 3 Punjai Sanki Uditttheri"] },
  { id: 77, name: "Govt. High School, Punjai Sangenthi (2)", address: "Punjai Sangenthi, Lalgudi Constituency, Tiruchirappalli", lat: 10.916694, lng: 78.877083, votersCount: 677, areaCovered: ["Punjai Sankendhi (R.V) and (P), Ward 3 THERKU THERU", "Punjai Sankendhi (R.V) and (P), WARD 4 CHANTHI VEERAPPA PURAM"] },
  { id: 78, name: "Panchayat Union Middle School, Kumulur (North)", address: "Kumulur, Lalgudi Constituency, Tiruchirappalli", lat: 10.956306, lng: 78.843194, votersCount: 1130, areaCovered: ["Kumuloor (R.V) and (P), Ward 1 Therodum Veethi", "Kumuloor (R.V) and (P), WARD 1 NADU THERU", "Kumuloor (R.V) and (P), WARD 3 PUDUNATHAM", "Kumuloor (R.V) and (P), WARD 4 SAKKIILIYAR THERU", "Kumuloor (R.V) and (P), WARD 4 PALANIYANDI MADAM"] },
  { id: 79, name: "Panchayat Union Middle School, Kumulur (SE)", address: "Kumulur, Lalgudi Constituency, Tiruchirappalli", lat: 10.952944, lng: 78.846389, votersCount: 732, areaCovered: ["Kumuloor (R.V) and (P), WARD 5 Saveriyar Kovil Theru", "Kumuloor (R.V) and (P), WARD 5 VALLUVAR THERU", "Kumuloor (R.V) and (P), WARD 5 SAKKIILIYAR THERU"] },
  { id: 80, name: "Panchayat Union Middle School, Kumulur (NS)", address: "Kumulur, Lalgudi Constituency, Tiruchirappalli", lat: 10.956306, lng: 78.843194, votersCount: 723, areaCovered: ["Kumuloor (R.V) and (P), WARD 2 THERODUM VEETHI", "Kumuloor (R.V) and (P), WARD 2 AMBALAKARA THERU", "Kumuloor (R.V) and (P), WARD 6 METTU THACHANKURICHI", "Kumuloor (R.V) and (P), WARD 6 VALANATHA PURAM"] },
  { id: 81, name: "Panchayat Union Middle School, Thatchankurichi (EW)", address: "Thatchankurichi, Lalgudi Constituency, Tiruchirappalli", lat: 10.954639, lng: 78.818444, votersCount: 842, areaCovered: ["Thatchankurichi (R.V) and (P), Ward 12 Muslim Street", "Thatchankurichi (R.V) and (P), Ward 1 Keela Street", "Thatchankurichi (R.V) and (P), Ward 23 Muthiraiayar Street", "Thatchankurichi (R.V) and (P), Ward 3 Ootar Street"] },
  { id: 82, name: "Panchayat Union Middle School, Thatchankurichi (SN-E)", address: "Thatchankurichi, Lalgudi Constituency, Tiruchirappalli", lat: 10.954639, lng: 78.818444, votersCount: 711, areaCovered: ["Thatchankurichi (R.V) and (P), Ward 2 South Street", "Thatchankurichi (R.V) and (P), Ward 3 Chettiyir Street", "Thatchankurichi (R.V) and (P), Ward 3 North Street"] },
  { id: 83, name: "Panchayat Union Middle School, Thatchankurichi (SN-W)", address: "Thatchankurichi, Lalgudi Constituency, Tiruchirappalli", lat: 10.954639, lng: 78.818444, votersCount: 1061, areaCovered: ["Thatchankurichi (R.V) and (P), Ward 4 Nallathangal Theru", "Thatchankurichi (R.V) and (P), WARD 4 SAVERIYAR KOVIL THERU", "Thatchankurichi (R.V) and (P), WARD 3 NORTH MARIYAMMAN THERU", "Thatchankurichi (R.V) and (P), WARD 3 THEPPILLAIYAR THERU", "Thatchankurichi (R.V) and (P), WARD 4 METTU THERU", "Thatchankurichi (R.V) and (P), WARD 4 ANNA NAGAR", "Thatchankurichi (R.V) and (P), WARD 4 T.METTUR STANDING COLUMN", "Thatchankurichi (R.V) and (P), WARD 4 SAMATHUVAPURAM"] },
  { id: 84, name: "Govt. High School, Pudur Uthamanur (West)", address: "Pudur Uthamanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.914833, lng: 78.753667, votersCount: 844, areaCovered: ["Pudur Uthamanur (R.V) and (), Ward 1 Mariyamman Kovil Theru", "Pudur Uthamanur (R.V) and (P), WARD 1 PUDU THERU", "Pudur Uthamanur (R.V) and (P), WARD 2 NORTH THERU", "Pudur Uthamanur (R.V) and (P), WARD 2 KULUNTHALAMMAN KOVIL THERU", "Pudur Uthamanur (R.V) and (P), WARD 2 VADAKKU PUDU THERU", "Pudur Uthamanur (R.V) and (P), WARD 4 NADU THERU"] },
  { id: 85, name: "Panchayat Union Elementary School, Pudur Uthamanur (West)", address: "Pudur Uthamanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.916556, lng: 78.754944, votersCount: 814, areaCovered: ["Pudur Utthamanur (R.V) and (P), WARD 3 THERODUM VADAKKU VEETHI", "Pudur Utthamanur (R.V) and (P), WARD 3 MUSLIM THERU", "Pudur Utthamanur (R.V) and (P), WARD 5 THERODUM KEELA VEETHI", "Pudur Utthamanur (R.V) and (P), WARD 5 MELA VEETHI", "Pudur Utthamanur (R.V) and (P), WARD 5 VINAYAKAR THERU"] },
  { id: 86, name: "Panchayat Union Elementary School, Pudur Uthamanur (NS)", address: "Pudur Uthamanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.914833, lng: 78.753667, votersCount: 898, areaCovered: ["Pudur Uthamanur (R.V) and (P), Ward 6 HIERKU Pella Theru", "Pudur Uthamanur (R.V) and (P), WARD 6 PILAPPU THERU", "Pudur Uthamanur (R.V) and (P), WARD 6 THENNA MARA SOLAI", "Pudur Uthamanur (R.V) and (P), WARD 6 VADAKKU PARATHERU"] },
  { id: 87, name: "Panchayat Union Elementary School, Mahilambadi (North-1)", address: "Mahilambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.935278, lng: 78.810194, votersCount: 975, areaCovered: ["Mahilam badi (R.V) and (P), Ward 1 North Mahilambadi", "Mahilam badi (R.V) and (P), WARD 1 PUDU THERU", "Mahilam badi (R.V) and (P), WARD 1 KALLARAI METTU THERU", "Mahilam badi (R.V) and (P), WARD 2 SOUTH MAHILAMBADI KEELA THERU", "Mahilam badi (R.V) and (P), WARD 2 SOUTH MAHILAMBADI MELA THERU"] },
  { id: 88, name: "Panchayat Union Elementary School, Mahilambadi (North-2)", address: "Mahilambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.935278, lng: 78.810194, votersCount: 997, areaCovered: ["Mahilam badi (R.V) and (P), Ward 3 Pillambady Theru", "Mahilam badi (R.V) and (P), WARD 3 THERADI THERU", "Mahilam badi (R.V) and (P), WARD 4 SEBASTHIYAR KOVIL THERU", "Mahilam badi (R.V) and (P), WARD 4 MADADHU THERU", "Mahilam badi (r-v) and (p), Ward 5 srular theru6", "Mahilam badi (R.V) and (P), WARD 5 THIRUVALLUVAR NAGAR"] },
  { id: 89, name: "Aided Elementary School, Renthinangudi", address: "Renthinangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.926306, lng: 78.767806, votersCount: 1138, areaCovered: ["R.R. Valavanoor (R.V) and (P), Ward 1 VADAKKU VEETHI", "R. Valavanoor (R.V) and (P), Ward 1 mela veethi3", "R. Valavanoor (R.V) and (P), WARD 1 THERKU VEETHI", "R.R. Valavanoor (R.V) and (P), WARD 1 KEELA VEETHI", "R.R. Valavanoor (R.V) and (P), WARD 1 MALLIKAI THERU", "R.R. Valavanoor (R.V) and (P), WARD 1 RETHINAMKUDI VADAKKU VEETHI", "R. Valavanoor (R.V) and (P), WARD 2 RETHINAMKUDI THEKU VEETHI", "R. Valavanoor (R.V) and (P), WARD 2 RETHINAGKUDI MELA VEETHI", "R. valavanoor (r-v) and (p), Ward 3 narimedu north theru"] },
  { id: 90, name: "Panchayat Union Elementary School, Neikuppai (West)", address: "Neikuppai, Lalgudi Constituency, Tiruchirappalli", lat: 10.923806, lng: 78.787222, votersCount: 721, areaCovered: ["Neikuppai South (R.V) and (P), Ward 5 Dharmanatha Puram", "Neikuppai South (R.V) and (P), WARD 5 ANATHARU", "Neikuppai South (R.V) and (P), WARD 3 KAMARAJAR COLONY", "Neikuppai South (R.V) and (P), WARD 5 MUTHURAJA PURAM"] },
  { id: 91, name: "Adi Dravida Welfare School, Neikuppai", address: "Neikuppai, Lalgudi Constituency, Tiruchirappalli", lat: 10.923806, lng: 78.787222, votersCount: 627, areaCovered: ["Neikuppai South (R.V) and (P), WARD 4 MALAIMAADHA KOVIL THERU", "Neikuppai South (R.V) and (P), WARD 4 VADAKKU COLONY", "Neikuppai South (R.V) and (P), WARD 5 KEELMARI MANGALAM"] },
  { id: 92, name: "Panchayat Union Elementary School, Neikuppai (West-2)", address: "Neikuppai, Lalgudi Constituency, Tiruchirappalli", lat: 10.923806, lng: 78.787222, votersCount: 567, areaCovered: ["Neikuppai North (R.V) and (P), Ward-1 Keela Theru", "Neikuppai North (R.V) and (P), WARD -1 MELA THERU", "Neikuppai North (R.V) and (P), Ward-2 Nadu Theru", "Neikuppai North (R.V) and (P), WARD -2 South Street"] },
  { id: 93, name: "Panchayat Union Elementary School, Neikuppai (East)", address: "Neikuppai, Lalgudi Constituency, Tiruchirappalli", lat: 10.923806, lng: 78.787222, votersCount: 755, areaCovered: ["Neikuppai North (R.V) and (P), Ward-1 North Street and 1Line2", "Neikuppai North (R.V) and (P), Ward-1 Indhira Nagar Neikuppai North (R.V) and (P), WARD-3 Harijana Street"] },
  { id: 94, name: "Panchayat Union Middle School, Agalanganallur (North)", address: "Agalanganallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.901, lng: 78.8111, votersCount: 720, areaCovered: ["Thirumangalam (R.V), Agalanga Nallur (P), Ward 1 South Theru", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 1 THENPURAM NAGU THERU", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 1 THENPURAM THERU3", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 3 THRUPATHANG KARA", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 1 NORTH THERU", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 1 AGRAHARAM"] },
  { id: 95, name: "Panchayat Union Middle School, Agalanganallur (Middle)", address: "Agalanganallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.901, lng: 78.8111, votersCount: 586, areaCovered: ["Thirumangalam (R.V), Agalanga Nallur (P), WARD 3 NADU CHRISUDHUVA PUDU THERU", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 2 PALLIKOODA THERU", "Thirumangalam (r-v), agalanga nallur (p), Ward 3 u. pudu theru4", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 2 HARIJANA THERU"] },
  { id: 96, name: "Panchayat Union Middle School, Agalanganallur (South)", address: "Agalanganallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.901, lng: 78.8111, votersCount: 1191, areaCovered: ["Thirumangalam (R.V), Agalanga Nallur (P), Ward 2 Veneli Nilaiya Theru", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 2 SOUTH THERU", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 2 HARIJANA THERU", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 4 MARIYAMMAN KOVIL THERU", "Thirumangalam (R.V), Agalanga Nallur (P), WARD 4 Indira COLONY"] },
  { id: 97, name: "Panchayat Union Middle School, Thirumangalam (North)", address: "Thirumangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8968, lng: 78.8071, votersCount: 480, areaCovered: ["Thirumangalam (R.V) and (P), Ward 1 Sannathi Theru, Agragaram Theru", "Thirumangalam (R.V) and (P), WARD 1 NORTH THERU"] },
  { id: 98, name: "Panchayat Union Middle School, Thirumangalam (West)", address: "Thirumangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8968, lng: 78.8071, votersCount: 889, areaCovered: ["Thirumangalam (R.V) and (P), WARD 2 SOUTH THERU", "Thirumangalam (r-v) and (p), Ward 2 maadhakoyil theru3", "Thirumangalam (R.V) and (P), WARD 3 PALLE THERU"] },
  { id: 99, name: "Panchayat Union Middle School, Thirumangalam (East)", address: "Thirumangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8968, lng: 78.8071, votersCount: 1001, areaCovered: ["Thirumangalam (R.V) and (P), Ward 4 Panagkottankudi Mettu Theru", "Thirumangalam (R.V) and (P), WARD 4 MARIYAMMAN KOVIL THERU", "Thirumangalam (R.V) and (P), WARD 3 PALLAR THERU"] },
  { id: 100, name: "Panchayat Union Elementary School, Nagar (EW)", address: "Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.909, lng: 78.8068, votersCount: 1076, areaCovered: ["Nagar (R.V) and (P), Ward 1 Mettu Theru", "Nagar (R.V) and (P), WARD 1 MAIN ROAD", "Nagar (r.v) and (p), Ward 1 agragaram Nagar (r.v) and (p), WARD 2 INDU UDAIYAR THERU", "Nagar (R.V) and (P), WARD 2 SOUTH THERU", "Nagar (R.V) and (P), WARD 2 MOTCHAI KOLLAITHER", "Nagar (R.V) and (P), WARD 2 SANNATHI THERU", "Nagar (R.V) and (P), WARD 1 PUDU THERU"] },
  { id: 101, name: "Panchayat Union Elementary School, Nagar (NS)", address: "Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.909, lng: 78.8068, votersCount: 783, areaCovered: ["Nagar (R.V) and (P), Ward 3 North Theru", "Nagar (R.V) and (P), WARD 3 SOUTH CHRISDUVA UDAIYAR THERU", "Nagar (R.V) and (P), WARD 3 MARIYAMMAN KOVIL THERU", "Nagar (R.V) and (P), WARD 4 SAVERIYAR KOVIL THERU"] },
  { id: 102, name: "Panchayat Union Middle School, Marudhur (East)", address: "Marudhur, Lalgudi Constituency, Tiruchirappalli", lat: 10.915, lng: 78.8072, votersCount: 1113, areaCovered: ["MARUDHUR (R.V) and (P), WARD 1 VADAKKU THERU [SIYAN KOIL]", "MARUDHUR (R.V) and (P), WARD 1 PANDARA THERU", "MARUDHUR (R.V) and (P), WARD 1 KUDI THERU", "MARUDHUR (R.V) and (P), WARD 1 GOUNDER THERUS", "MARUDHUR (R.V) and (P), WARD 2 NEHRU NAGAR", "MARUDHUR (R.V) and (P), WARD 1 UDAIYAR THOPPU"] },
  { id: 103, name: "Panchayat Union Middle School, Marudhur (West)", address: "Marudhur, Lalgudi Constituency, Tiruchirappalli", lat: 10.915, lng: 78.8072, votersCount: 742, areaCovered: [
    "MARUDHUR (R.V) and (P), Ward 3 Thirukavur Kelmel Veethi",
    "MARUDHUR (R.V) and (P), WARD 3 THIRUKKAVUR OUTER",
    "MARUDHUR (R.V) and (P), WARD 3 KAMARAJ NAGAR",
    "MARUDHUR (R.V) and (P), WARD 3 MELA THERU",
  ] },
  { id: 104, name: "Panchayat Union Elementary School, Enchur", address: "Enchur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8968, lng: 78.8072, votersCount: 576, areaCovered: [
    "MADAKUDI (R.V) and (P), Ward 3 ENJURE HARIJANA THERU",
    "MADAKUDI (R.V) and (P), WARD 3 ENJURE KUDI THERU",
    "MADAKUDI (R.V) and (P), WARD 3 MADAKUDI",
  ] },
  { id: 105, name: "St. Mary RC Elementary School, Pallividai (Centre)", address: "Pallividai, Lalgudi Constituency, Tiruchirappalli", lat: 10.8901, lng: 78.7197, votersCount: 1083, areaCovered: [
    "MADAKUDI (R.V) and (P) , Ward 1 Pallividai Kudi Theru",
    "MADAKUDI (R.V) and (P) , WARD 1 HARIJANA THERU",
  ] },
  { id: 106, name: "St. Mary RC Elementary School, Pallividai (South)", address: "Pallividai, Lalgudi Constituency, Tiruchirappalli", lat: 10.8901, lng: 78.7197, votersCount: 1003, areaCovered: [
    "MADAKUDI (R.V) and (P) , WARD 1 MAIN ROAD",
    "MADAKUDI (R.V) and (P) , WARD 1 RASAIYAN KOVIL",
    "MADAKUDI (R.V) and (P) , WARD 1 UPPILIYAR THERU",
    "MADAKUDI (R.V) and (P) , WARD 2 EDA KUDI",
  ] },
  { id: 107, name: "St. Mary RC Elementary School, Pallividai (East)", address: "Pallividai, Lalgudi Constituency, Tiruchirappalli", lat: 10.8901, lng: 78.7197, votersCount: 1203, areaCovered: [
    "V.THURAIYUR (R.V), MADAKUDI (P), Ward 4 V.Thuraiyur Therku Natham",
    "V.THURAIYUR (R.V), MADAKUDI (P), WARD 4 V.THURAIYUR VADAKKU NATHAM",
    "V.THURAIYUR (R.V) and MADAKUDI (P), WARD 4 HARIJANA PALLAR THERU",
    "V.THURAIYUR (R.V) and MADAKUDI (P), WARD 4 THERKKU THOPPU",
    "V.thueaiyur (r.v) and madakudi (p) , Ward 4 harijana theru",
    "MADAKUDI (R.V) and (P), WARD 2 MADAKKUDI EDAKKUDI THOPPU",
    "MADAKUDI (R.V) and (P) , WARD 2 VALAKKURICHI",
  ] },
  { id: 108, name: "Panchayat Union Elementary School, Vaipur", address: "Vaipur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8901, lng: 78.7197, votersCount: 878, areaCovered: [
    "MADAKUDI (R.V) and (P) , WARD 2 VAIPPUR HARIJANA THERU",
    "MADAKUDI (R.V) and (P), WARD 2 VAIPPUR HARIJANA THERU",
    "MADAKUDI (R.V) and (P) , WARD 2 VAIPURKUDI THERU",
    "MADAKUDI (R.V) and (P) , WARD 2 VAIPPUR KUDITHERU",
    "MADAKUDI (R.V) and (P) , WARD-2 PERPPANGUDI",
    "MADAKUDI (R.V) and (P), WARD 2 PERUPPANGUDI",
    "MADAKUDI (R.V) and (P), WARD 2 THOPPU PERUPPANGUDI",
    "MADAKUDI (R.V) and (P) , WARD 2 MAVILAI THERU",
    "MADAKUDI (R.V) and (P) , WARD 2 MAVILA THERU",
    "MADAKUDI (R.V) and (P) , WARD 2 SATHAMBADI",
    "MADAKUDI (R.V) and (P), WARD 2 SATHAMPADI",
  ] },
  { id: 109, name: "Govt. High School, Thalakkudi (North)", address: "Thalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8735, lng: 78.7201, votersCount: 1010, areaCovered: [
    "THALAKUDI (R.V) and (P), Ward 2 Muthamil Nagar",
    "THALAKUDI (R.V) and (P), Ward 3 Kadaiveedhi Main Road East Portion",
    "THALAKUDI (R.V) and (P), Ward 2 Senthamil Nagar",
    "THALAKUDI (R.V) and (P), Ward 2 Rajalinga Nagar",
    "Thalakudi pantchayat , Appadurai road angunagarindiranagarmahalakshminagar",
  ] },
  { id: 110, name: "Govt. High School, Thalakkudi (South-North)", address: "Thalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8735, lng: 78.7201, votersCount: 1059, areaCovered: [
    "THALAKUDI (R.V) and (P), Ward 2 Main Road Muslim Street",
    "THALAKUDI (R.V) and (P), Ward 2 South Street Ulveethi Kamaraj Nagar",
    "THALAKUDI (R.V) and (P), Ward 2 Street Road Section",
  ] },
  { id: 111, name: "Panchayat Union Elementary School, Thalakkudi (South)", address: "Thalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8741, lng: 78.7204, votersCount: 993, areaCovered: [
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), Ward 6 Keera Mangalam Harijana Street",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 KEERA MANGALAM KUDI STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 VAZHAKATTAI",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 THIRUVALLUVAR THERU",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 OM SAKTHI NAGAR",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 MUTHU NAGAR FIRST STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 MUTHUNAGAR SECOND CUT STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 SUBRAMANIYA AVENUE FIRST STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 SUBRAMANIYA AVENUE SECOND STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 SUBRAMANIAN AVENUE THIRD STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 INDRA NAGAR",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 THIRUMALAI NAGAR",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAYAR THOPPU FIRST STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAYAR THOPPU SECOND STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAYAR THOPPU THIRD STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAYAR THOPPU FOURTH STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAYAR THPOOU PILLAIYAR KOIL STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAYAR THOPPU FIFTH STREET",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 RAILWAY ROAD",
    "KEERAMANGALAM (R.V) ,THALAKUDI (P), WARD 6 OM SAKTHI NAGAR 1",
  ] },
  { id: 112, name: "Panchayat Union Elementary School, Thalakkudi (NS-North)", address: "Thalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8741, lng: 78.7204, votersCount: 783, areaCovered: [
    "THALAKUDI (R.V) and (P), Ward 1 VADAKKU THERU KELAKKU PAGUTHI",
    "THALAKUDI (R.V) and (P), WARD 1 VADAKKU THERU MERKU PAGUTHI",
    "THALAKUDI (R.V) and (P), WARD 1 NADU THERU",
    "THALAKUDI (R.V) and (P), WARD 1 PAJANAIMADA THERU",
    "THALAKUDI (R.V) and (P), WARD 1 KAAVAL VEETHI",
  ] },
  { id: 113, name: "Panchayat Union Elementary School, Thalakkudi (SN-South)", address: "Thalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8741, lng: 78.7204, votersCount: 993, areaCovered: [
    "THALAKUDI (R.V) and (P), WARD 1 KALLAR THERU",
    "THALAKUDI (R.V) and (P), WARD 1 VATHIYAR THERU",
    "THALAKUDI (R.V) and (P), WARD 3 VEMPADI THERU HARIJANA THERU",
    "THALAKUDI (R.V) and (P), WARD 3 HARIJANA COLONY",
    "THALAKUDI (R.V) and (P), Ward 4 Thiruvalluvar Theru",
    "THALAKUDI (R.V) and (P), Ward 4 Gandhi Nagar",
    "Thalakudi (r.v) and (p), Ward 5 harijana pallar theru, kudi theru",
    "THALAKUDI (R.V) and (P), WARD 5 KRISHNA NAGAR",
  ] },
  { id: 114, name: "Adi Dravidar Welfare High School, Melavaladi (SN)", address: "Melavaladi, Lalgudi Constituency, Tiruchirappalli", lat: 10.876694, lng: 78.741306, votersCount: 770, areaCovered: [
    "APPADURAI (R.V) and (P), Ward-1 Appadurai Vadakku Kudi Street",
    "APPADURAI (R.V) and (P), Ward-1 Appadurai Therku Kudi Theru",
    "APPADURAI (R.V) and (P), Ward-2 Akilandapuram South Street",
    "APPADURAI (R.V) and (P), Ward-2 Akilandapuram Nadu Theru",
    "Appadurai (r.v) and (p), Ward-2 akilandapuram north street",
    "APPADURAI (R.V) and (P), Ward-2 Angu Nagar",
    "APPADURAI (R.V) and (P), Ward-2 Maha lakshmi Nagar",
  ] },
  { id: 115, name: "Adi Dravidar Welfare High School, Melavaladi (EW)", address: "Melavaladi, Lalgudi Constituency, Tiruchirappalli", lat: 10.876694, lng: 78.741389, votersCount: 964, areaCovered: [
    "APPADURAI (R.V) and (P), Ward-2 B.S Nagar",
    "APPADURAI (R.V) and (P), Ward-2 Vallalar Nagar",
    "APPADURAI (R.V) and (P), Ward-3 Mela Valadi Mani Road",
    "Appadurai (r.v) and (p), Ward 4 kudi theru",
    "APPADURAI (R.V) and (P), WARD 5 PERIYAR NAGAR",
  ] },
  { id: 116, name: "Adi Dravidar Welfare High School, Melavaladi (NS)", address: "Melavaladi, Lalgudi Constituency, Tiruchirappalli", lat: 10.876694, lng: 78.741389, votersCount: 879, areaCovered: [
    "APPADURAI (R.V) and (P), WARD 6 KALKAANI THOPPU",
    "APPADURAI (R.V) and (P), WARD 6 ANTHONIYAR KOVIL THERU",
  ] },
  { id: 117, name: "Panchayat Union Middle School, Therkuchatiram (West)", address: "Therkuchatiram, Lalgudi Constituency, Tiruchirappalli", lat: 10.874194, lng: 78.737361, votersCount: 903, areaCovered: [
    "APPADURAI (R.V) and (P), Ward 7 South Chatiram Therku Theru",
    "APPADURAI (R.V) and (P), WARD 7 THERKU THERU CHATIRAM MAIN ROAD",
    "APPADURAI (R.V) and (P), WARD 7 RAJAGIRI GARDEN",
  ] },
  { id: 118, name: "Panchayat Union Middle School, Therkuchatiram (East)", address: "Therkuchatiram, Lalgudi Constituency, Tiruchirappalli", lat: 10.874194, lng: 78.737361, votersCount: 744, areaCovered: [
    "Pudukkudi (R.V) and (P), Ward 1 Therku Kudi Theru",
    "Pudukkudi (R.V) and (P), Ward 1 Vadakku Kudi Theru",
    "Pudukkudi (R.V) and (P), Ward 1 Harijana Theru",
    "Pudukkudi (R.V) and (P), Ward 1 Panguni Karai",
    "Pudukkudi (R.V) and (P), Ward 4 Sempalani Harijana Theru",
    "Pudukkudi (R.V) and (P), Ward 1 Gandhi Nagar"
  ] },
  { id: 119, name: "Panchayat Union Middle School, Esanakkorai (North)", address: "Esanakkorai, Lalgudi Constituency, Tiruchirappalli", lat: 10.8713, lng: 78.7116, votersCount: 858, areaCovered: [
    "Esanakorai (R.V) and (P), Ward 1 Pudu Theru",
    "Esanakorai (R.V) and (P), Ward 1 Keela Harijana Theru",
    "Esanakorai (R.V) and (P), Ward 1 Mela Harijana Theru",
    "Esanakorai (R.V) and (P), Ward 3 North Theru"
  ] },
  { id: 120, name: "Panchayat Union Middle School, Esanakkorai (Middle)", address: "Esanakkorai, Lalgudi Constituency, Tiruchirappalli", lat: 10.871611, lng: 78.711611, votersCount: 906, areaCovered: [
    "Esanakorai (R.V) and (P), Ward 2 South Theru",
    "Esanakorai (R.V) and (P), Ward 1 Sanar Theru",
    "Esanakorai (R.V) and (P), Ward 3 Indira Nagar",
    "Esanakorai (R.V) and (P), Ward 3 Harijana Theru"
  ] },
  { id: 121, name: "Panchayat Union Elementary School, T. Valavanur", address: "T. Valavanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.865306, lng: 78.7615, votersCount: 1231, areaCovered: [
    "T. Valavanur (R.V) and (P), Ward 1 Agraharam Kudi Theru",
    "T. Valavanur (R.V) and (P), Ward 1 Therku Theru",
    "T. Valavanur (R.V) and (P), Ward 1 Vadakku Theru",
    "T. Valavanur (R.V) and (P), Ward 2 East Dhangkorai Kudi Theru"
  ] },
  { id: 122, name: "Panchayat Union Elementary School, Sirumarudur", address: "Sirumarudur, Lalgudi Constituency, Tiruchirappalli", lat: 10.884806, lng: 78.756306, votersCount: 1115, areaCovered: [
    "Sirumarudhur (R.V) and (P), Ward 1 Main Road",
    "Sirumarudhur (R.V) and (P), Ward 1 Agraharam",
    "Sirumarudhur (R.V) and (P), Ward 1 Pillaiyar Kovil Street",
    "Sirumarudhur (R.V) and (P), Ward 1 Melaarisana Street",
    "Sirumarudhur (R.V) and (P), Ward 1 Melas Street",
    "Sirumarudhur (R.V) and (P), Ward 2 East Arisana Street",
    "Sirumarudhur (R.V) and (P), Ward 3 Thaththanur Kallar Street",
    "Sirumarudhur (R.V) and (P), Ward 4 Thaththanur South Arisana Street",
    "Sirumarudhur (R.V) and (P), Ward 5 Thaththanur North Arisana Street"
  ] },
  { id: 123, name: "Govt. HSS, Valadi (East)", address: "Valadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.946194, lng: 78.756611, votersCount: 501, areaCovered: [
    "Valadi (R.V) and (P), Ward 3 Pudukudi",
    "Valadi (R.V) and (P), Ward 3 Reddy Chathiram",
    "Valadi (R.V) and (P), Ward 2 Sempalani Kallar Theru"
  ] },
  { id: 124, name: "Govt. HSS, Valadi (West-1)", address: "Valadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.946194, lng: 78.756611, votersCount: 585, areaCovered: [
    "Valadi (R.V) and (P), Ward 1 Main Road",
    "Valadi (R.V) and (P), Ward 3 Pudu Road Theru"
  ] },
  { id: 125, name: "Govt. HSS, Valadi (West-New)", address: "Valadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.946194, lng: 78.756611, votersCount: 994, areaCovered: [
    "Valadi (R.V) and (P), Ward 1 Valadi Agraharam",
    "Valadi (R.V) and (P), Ward 2 Kuditheru"
  ] },
  { id: 126, name: "Panchayat Union Elementary School, Valadi (East)", address: "Valadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.946194, lng: 78.756611, votersCount: 875, areaCovered: [
    "Valadi (R.V) and (P), Ward 3 Valadi Keela Theru"
  ] },
  { id: 127, name: "Aided Middle School, Gabrielpuram", address: "Gabrielpuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.875111, lng: 78.774389, votersCount: 852, areaCovered: [
    "Valadi (R.V) and (P), Ward 4 Velayudhapuram",
    "Valadi (R.V) and (P), Ward 5 Patchampettai Valavus",
    "Valadi (R.V) and (P), Ward 4 Gabrielpuram",
    "Valadi (R.V) and (P), Ward 5 Kamarajapuram"
  ] },
  { id: 128, name: "St. Philominal RC Middle School, Mela Perungavur (South)", address: "Mela Perungavur, Lalgudi Constituency, Tiruchirappalli", lat: 10.890111, lng: 78.7675, votersCount: 790, areaCovered: [
    "Keelaperungavur (R.V) and (P), Ward 1 Mazhayaanur Kudi Theru",
    "Keelaperungavur (R.V) and (P), Ward 1 Anthiyar Kovil Street",
    "Keelaperungavur (R.V) and (P), Ward 1 Mariyamman Kovil Street",
    "Keelaperungavur (R.V) and (P), Ward 3 Mela Perungavur Sakkiliyar Street",
    "Keelaperungavur (R.V) and (P), Ward 2 Pandara Street",
    "Keelaperungavur (R.V) and (P), Ward 4 Mulabathukudi Udaiyar Street",
    "Keelaperungavur (R.V) and (P), Ward 4 Maichelpatti Udaiyar Street"
  ] },
  { id: 129, name: "St. Philominal RC Middle School, Mela Perungavur (North)", address: "Mela Perungavur, Lalgudi Constituency, Tiruchirappalli", lat: 10.890111, lng: 78.7675, votersCount: 853, areaCovered: [
    "Keelaperungavur (R.V) and (P), Ward 4 Maichel Patti Arisana Street",
    "Keelaperungavur (R.V) and (P), Ward 4 Mela Perungavur Vadakku Theru",
    "Keelaperungavur (R.V) and (P), Ward 3 Mela Perungavur Nadu Theru",
    "Keelaperungavur (R.V) and (P), Ward 3 Mela Perungavur Therku Theru",
    "Keelaperungavur (R.V) and (P), Ward 3 Mela Perungavur Mela Street",
    "Keelaperungavur (R.V) and (P), Ward 2 Keel Perungavur Harijana Street"
  ] },
  { id: 130, name: "Panchayat Union Middle School, Thirumananedu (East)", address: "Thirumananedu, Lalgudi Constituency, Tiruchirappalli", lat: 10.870306, lng: 78.781, votersCount: 544, areaCovered: [
    "Thirumanamedu West (R.V) and (P), Ward 1 Pudu Theru First Veethi",
    "Thirumanamedu West (R.V) and (P), Ward 1 Pudu Theru Second Veethi",
    "Thirumanamedu West (R.V) and (P), Ward 1 Pudu Theru Third Veethi",
    "Thirumanamedu West (R.V) and (P), Ward 1 Pudu Theru Fourth Veethi",
    "Thirumanamedu West (R.V) and (P), Ward 1 Harijana Street",
    "Thirumanamedu West (R.V) and (P), Ward 1 Pudu Street Harijana Par Street 2nd Veethi",
    "Thirumanamedu West (R.V) and (P), Ward 1 Pudhutheru Harijana Par Street 3rd Veethi"
  ] },
  { id: 131, name: "Panchayat Union Middle School, Thirumananedu (West)", address: "Thirumananedu, Lalgudi Constituency, Tiruchirappalli", lat: 10.8715, lng: 78.783806, votersCount: 804, areaCovered: [
    "Thirumanamedu West (R.V) and (P), Ward 2 Main Road",
    "Thirumanamedu West (R.V) and (P), Ward 2 Agraharam",
    "Thirumanamedu West (R.V) and (P), Ward 2 Sivan Kovil Sandhu",
    "Thirumanamedu West (R.V) and (P), Ward 2 Palaiya Theru"
  ] },
  { id: 132, name: "Panchayat Union Middle School, Thirumananedu (Middle)", address: "Thirumananedu, Lalgudi Constituency, Tiruchirappalli", lat: 10.870306, lng: 78.781, votersCount: 714, areaCovered: [
    "Thirumanamedu West (R.V) and (P), Ward 3 Rajagopalapuram",
    "Thirumanamedu West (R.V) and (P), Ward 4 Pallar Colony Theru"
  ] },
  { id: 133, name: "Anganwadi Centre, Patchampettai", address: "Patchampettai, Lalgudi Constituency, Tiruchirappalli", lat: 10.861, lng: 78.7815, votersCount: 691, areaCovered: [
    "Thirumanamedu East (R.V) and (P), Ward 5 Patchampettai Kudi Theru",
    "Thirumanamedu East (R.V) and (P), Ward 5 Patchampettai Karikadai Theru",
    "Thirumanamedu East (R.V) and (P), Ward 5 Pudu Theru First",
    "Thirumanamedu East (R.V) and (P), Ward 5 Pudu Theru Second",
    "Thirumanamedu East (R.V) and (P), Ward 8 Pachampettai Pallar Street"
  ] },
  { id: 134, name: "Panchayat Union Elementary School, Patchampettai", address: "Patchampettai, Lalgudi Constituency, Tiruchirappalli", lat: 10.860694, lng: 78.7815, votersCount: 735, areaCovered: [
    "Thirumanamedu East (R.V) and (P), Ward 5 Agraharam Kudi Theru",
    "Thirumanamedu East (R.V) and (P), Ward 6 Muthiyur Kuditheru Sixth",
    "Thirumanamedu East (R.V) and (P), Ward 6 Muthiyur Kuditheru Seventh",
    "Thirumanamedu East (R.V) and (P), Ward 6 Muthiyur Kuditheru Eighth",
    "Thirumanamedu East (R.V) and (P), Ward 6 Muthiyur Kudi Theru Ninth Street",
    "Thirumanamedu East (R.V) and (P), Ward 7 Muthiyur Pallar Street"
  ] },
  { id: 135, name: "St. Mary Middle School, Periyavarseeli", address: "Periyavarseeli, Lalgudi Constituency, Tiruchirappalli", lat: 10.8575, lng: 78.799694, votersCount: 1172, areaCovered: [
    "Sevanthinathapuram (R.V) and (P), Ward 1 Agraharam",
    "Sevanthinathapuram (R.V) and (P), Ward 1 Kudi Theru",
    "Sevanthinathapuram (R.V) and (P), Ward 1 Manthai Theru",
    "Sevanthinathapuram (R.V) and (P), Ward 2 Pallar Theru",
    "Sevanthinathapuram (R.V) and (P), Ward 3 Periyar Arseli",
    "Sevanthinathapuram (R.V) and (P), Ward 4 Nadu Theru",
    "Sevanthinathapuram (R.V) and (P), Ward 4 Mela Veethi",
    "Sevanthinathapuram (R.V) and (P), Ward 4 Dharmanathapuram Nadu Veethi",
    "Sevanthinathapuram (R.V) and (P), Ward 5 Vadakku Theru",
    "Sevanthinathapuram (R.V) and (P), Ward 5 Kelakku Theru"
  ] },
  { id: 136, name: "Panchayat Union Elementary School, Pambaramsuthi (West)", address: "Pambaramsuthi, Lalgudi Constituency, Tiruchirappalli", lat: 10.871111, lng: 78.784306, votersCount: 563, areaCovered: [
    "Pamparamasuthi (R.V) and (P), Ward 1 Luthan Mission Theru",
    "Pamparamasuthi (R.V) and (P), Ward 1 Mariyamman Kovil Theru",
    "Pamparamasuthi (R.V) and (P), Ward 1 Main Road",
    "Pamparamasuthi (R.V) and (P), Ward 1 Colony Theru"
  ] },
  { id: 137, name: "Panchayat Union Elementary School, Pambaramsuthi (East)", address: "Pambaramsuthi, Lalgudi Constituency, Tiruchirappalli", lat: 10.875611, lng: 78.788611, votersCount: 816, areaCovered: [
    "Pamparamasuthi (R.V) and (P), Ward 1 Palaya Theru",
    "Pamparamasuthi (R.V) and (P), Ward 2 Pudu Theru",
    "Pamparamasuthi (R.V) and (P), Ward 2 Agraharam",
    "Pamparamasuthi (R.V) and (P), Ward 2 Ayyan Vaikkal Karai Theru"
  ] },
  { id: 138, name: "Panchayat Union Elementary School, Nerunjalakkudi (West)", address: "Nerunjalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.875611, lng: 78.788694, votersCount: 927, areaCovered: [
    "Nerungalakudi (R.V) and (P), Ward 1 Harijana Theru",
    "Nerungalakudi (R.V) and (P), Ward 2 Vellala Theru",
    "Nerungalakudi (R.V) and (P), Ward 1 Pallivalai"
  ] },
  { id: 139, name: "Panchayat Union Elementary School, Nerunjalakkudi (NS)", address: "Nerunjalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.875611, lng: 78.788694, votersCount: 818, areaCovered: [
    "Nerungalakudi (R.V) and (P), Ward 3 Pillaiyar Kovil Theru",
    "Nerungalakudi (R.V) and (P), Ward 3,4 Main Road"
  ] },
  { id: 140, name: "Govt. High School, Nerunjalakkudi (West)", address: "Nerunjalakkudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804389, votersCount: 568, areaCovered: [
    "Nerungalakudi (R.V) and (P), Ward 3 Agraharam",
    "Nerungalakudi (R.V) and (P), Ward 4 Muslim Theru",
    "Nerungalakudi (R.V) and (P), Ward 4 Nagar Road",
    "Nerungalakudi (R.V) and (P), Ward 4 Murugkarai Nagar",
    "Nerungalakudi (R.V) and (P), Ward 4 Gandhi Nagar"
  ] },
  { id: 141, name: "Shanmuga Aided Elementary School, Angarai (West)", address: "Angarai, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804389, votersCount: 873, areaCovered: [
    "Angarai (R.V) and (P), Ward 3 Main Road",
    "Angarai (R.V) and (P), Ward 3 Maniyakara Thoppu",
    "Angarai (R.V) and (P), Ward 3 Mela Kudi Street",
    "Angarai (R.V) and (P), Ward 3 Keela Kudi Street"
  ] },
  { id: 142, name: "Panchayat Union Elementary School, Angarai (NS)", address: "Angarai, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804306, votersCount: 882, areaCovered: [
    "Angarai (R.V) and (P), Ward 4 Malaiyappa Puram",
    "Angarai (R.V) and (P), Ward 4 Inasiyar Street"
  ] },
  { id: 143, name: "Panchayat Union Elementary School, Paramasivapuram", address: "Paramasivapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804306, votersCount: 908, areaCovered: [
    "Angarai (R.V) and (P), Ward 5 Therku Kamaraj Nagar"
  ] },
  { id: 144, name: "Anganwadi Building, V.O.C Nagar", address: "V.O.C Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804306, votersCount: 918, areaCovered: [
    "Angarai (R.V) and (P), Ward 5 VOC Nagar",
    "Angarai (R.V) and (P), Ward 5 Balaji Nagar"
  ] },
  { id: 145, name: "Shanmuga Aided Elementary School, Angarai (South)", address: "Angarai, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804306, votersCount: 870, areaCovered: [
    "Angarai (R.V) and (P), Ward 5 Vadakku Kamaraj Nagar",
    "Angarai (R.V) and (P), Ward 4 Ayyan Vaikkal Karai",
    "Angarai (R.V) and (P), Ward 4 Iswarya Nagar"
  ] },
  { id: 146, name: "Shanmuga Aided Elementary School, Angarai (North)", address: "Angarai, Lalgudi Constituency, Tiruchirappalli", lat: 10.877194, lng: 78.804306, votersCount: 1018, areaCovered: [
    "Angarai (R.V) and (P), Ward 1 Agraharam",
    "Angarai (R.V) and (P), Ward 1 Pudu Theru",
    "Angarai (R.V) and (P), Ward 2 Govindarajapuram"
  ] },
  { id: 147, name: "Panchayat Union Elementary School, Edaiyatrumangalam", address: "Edaiyatrumangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.853389, lng: 78.808389, votersCount: 657, areaCovered: [
    "Edayatrumangalam (R.V) and (P), Ward 1 Agraharam",
    "Edayatrumangalam (R.V) and (P), Ward 4 Therku Theru"
  ] },
  { id: 148, name: "Panchayat Union Elementary School, Melavalai", address: "Melavalai, Lalgudi Constituency, Tiruchirappalli", lat: 10.853389, lng: 78.808389, votersCount: 652, areaCovered: [
    "Seshasamuthiram (R.V), Edayatru Mangalam (P), Ward 1 Elamanakudi",
    "Seshasamuthiram (R.V), Edayatru Mangalam (P), Ward 1 Melavalai",
    "Seshasamuthiram (R.V), Edayatru Mangalam (P), Ward 2 Mela Valai",
    "Seshasamuthiram (R.V), Edayatru Mangalam (P), Ward 3 Paraiar Street"
  ] },
  { id: 149, name: "Panchayat Union Elementary School, Idaiyatrumangalam", address: "Idaiyatrumangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.853389, lng: 78.808389, votersCount: 863, areaCovered: [
    "Edayatru Mangalam (R.V), Ward 4 Merku Kudi Theru",
    "Edayatru Mangalam (R.V), Ward 2 Pallar Theru",
    "Seshasamuthiram (R.V), Edayatru Mangalam (P), Ward 1 Parayar Theru",
    "Seshasamuthiram (R.V), Edayatru Mangalam (P), Ward 1 Elamanakudi"
  ] },
  { id: 150, name: "Panchayat Union Middle School, Koohur (South)", address: "Koohur, Lalgudi Constituency, Tiruchirappalli", lat: 10.843806, lng: 78.832889, votersCount: 1114, areaCovered: [
    "Kooghur (R.V), Ward 1 North Street",
    "Kooghur (R.V), Ward 1 Mela Vaiyalur",
    "Kooghur (R.V), Ward 1 Keela Vaiyalur",
    "Kooghur (R.V), Ward 1 Therku Theru",
    "Kooghur (R.V), Ward 2 Agraharam",
    "Kooghur (R.V), Ward 2 Kudi Theru",
    "Kooghur (R.V), Ward 3 Hospital Street"
  ] },
  { id: 151, name: "Panchayat Union Middle School, Koohur (North)", address: "Koohur, Lalgudi Constituency, Tiruchirappalli", lat: 10.843806, lng: 78.833, votersCount: 986, areaCovered: [
    "Kooghur (R.V), Ward 3 Ayyanar Kovil Theru",
    "Kooghur (R.V), Ward 3 Harijana Colony",
    "Kooghur (R.V), Ward 3 Santhiyappar Kovil Street",
    "Kooghur (R.V), Ward 4 Mela Street",
    "Kooghur (R.V), Ward 2 Agraharam",
    "Kooghur (R.V), Ward 2 Keela Theru",
    "Kooghur (R.V), Ward 2 South Street"
  ] },
  { id: 152, name: "Panchayat Union Middle School, Sathamangalam (North)", address: "Sathamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.864111, lng: 78.846889, votersCount: 721, areaCovered: [
    "Sathamangalam (R.V), Ward 1 Keela Theru",
    "Sathamangalam (R.V), Ward 1 Agraharam Theru",
    "Sathamangalam (R.V), Ward 1 Vadakku Theru",
    "Sathamangalam (R.V), Ward 2 Therku Theru",
    "Sathamangalam (R.V), Ward 1 Pudu Street"
  ] },
  { id: 153, name: "Panchayat Union Middle School, Sathamangalam (West)", address: "Sathamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.864111, lng: 78.847, votersCount: 870, areaCovered: [
    "Sathamangalam (R.V), Ward 3 Ayyan Vaikkal Karai Theru",
    "Sathamangalam (R.V), Ward 4 Mariyamman Kovil Theru",
    "Sathamangalam (R.V), Ward 4 Saveriyar Kovil Colony Theru"
  ] },
  { id: 154, name: "Panchayat Union Middle School, Sathamangalam (East)", address: "Sathamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.864111, lng: 78.847, votersCount: 763, areaCovered: [
    "Sathamangalam (R.V), Ward 5 Anandhi Medu Kudi Theru",
    "Sathamangalam (R.V), Ward 5 Anandhi Medu Mariyamman Kovil Theru",
    "Sathamangalam (R.V), Ward 5 Anandhi Medu Saveriyar Koil Street"
  ] },
  { id: 155, name: "Adi Dravida Welfare Primary School, L.Abishekapuram", address: "L.Abishekapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.867806, lng: 78.815694, votersCount: 1419, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Krishnapuram Colony",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 1 Melathaikal Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 1 Edayatrumangalam Road",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 1 Pudu Kotha Theru"
  ] },
  { id: 156, name: "Govt. Boys HSS, Lalgudi (Room 16)", address: "Lalgudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.879806, lng: 78.816389, votersCount: 960, areaCovered: [
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 4 Aathi Thiravidar Street",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 4 Kudiyan Street"
  ] },
  { id: 157, name: "Govt. Boys HSS, Lalgudi (Room 18)", address: "Lalgudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.879806, lng: 78.816389, votersCount: 1255, areaCovered: [
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 5 Agraharam",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 5 Umarnagar"
  ] },
  { id: 158, name: "Panchayat Union Elementary School, Omakulam (East)", address: "Omakulam, Lalgudi Constituency, Tiruchirappalli", lat: 10.869306, lng: 78.818111, votersCount: 1212, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 14 Omakula Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 14 Itchiyadi Pillaiyar Kovil Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 14 Railway Colony",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 14 Vardharaj Nagar",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 14 Road Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 14 Ayyan Vaikal Karai"
  ] },
  { id: 159, name: "Panchayat Union Elementary School, Omakulam (West-N)", address: "Omakulam, Lalgudi Constituency, Tiruchirappalli", lat: 10.869306, lng: 78.818111, votersCount: 880, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Akilandeswari Nagar",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Nanparkal Nagar",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Asiriyar Nagar"
  ] },
  { id: 160, name: "Panchayat Union Elementary School, Omakulam (West-S)", address: "Omakulam, Lalgudi Constituency, Tiruchirappalli", lat: 10.869306, lng: 78.818111, votersCount: 1094, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Ganesh Nagar",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Rose Garden",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Vasanth Nagar",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 2 Venkateswar Nagar"
  ] },
  { id: 161, name: "Panchayat Union Elementary School, Omakulam (East-S)", address: "Omakulam, Lalgudi Constituency, Tiruchirappalli", lat: 10.869306, lng: 78.818111, votersCount: 1298, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Valaiyalkara Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Old Kotha Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Mission Santhu",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Thermootimuslim Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Kalipasahip Santhu",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Pallikuda Muslim Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 13 Iswariya Nagar"
  ] },
  { id: 162, name: "Panchayat Union Primary School, Paramasivapuram, Lalgudi", address: "Paramasivapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.868306, lng: 78.843889, votersCount: 894, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 1st Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 2nd Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 3rd Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 4th Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 5th Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 6th Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 7th Cross",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 3 Paramasivapuram 8th Cross"
  ] },
  { id: 163, name: "Govt. Boys HSS, Lalgudi (Room 20)", address: "Lalgudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.880, lng: 79.000306, votersCount: 867, areaCovered: [
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 5 Siruthaiyur Trichy Road",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Poovalur Road"
  ] },
  { id: 164, name: "Govt. Boys HSS, Lalgudi (Teachers Room)", address: "Lalgudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8753, lng: 78.8419, votersCount: 708, areaCovered: [
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Shanthi Nagar",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 5 Agraharam",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Ganapathi Nagar",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Anna Nagar",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Chokkalingapuram"
  ] },
  { id: 165, name: "Govt. Boys HSS, Lalgudi (Room 25)", address: "Lalgudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8751, lng: 78.8415, votersCount: 892, areaCovered: [
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 7 Nagammiyar Theru",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 7 Thiruvalluvar Nagar"
  ] },
  { id: 166, name: "Govt. Boys HSS, Lalgudi (Room 17)", address: "Lalgudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8761, lng: 78.8247, votersCount: 1254, areaCovered: [
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 7 Thiruvalluvar Nagar",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 7 Manakaal Road",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 7 Malattarkarai",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Mandapa Theru",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 6 Bharathi Nagar",
    "Siruthaiyur (R.V), Lalgudi (T.P), Ward 7 Lalkudi Road"
  ] },
  { id: 167, name: "Panchayat Union Elementary School, Vadakku Vasantham Nagar", address: "Vasantham Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.8645, lng: 78.8178, votersCount: 1259, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 8 Ayyanvaikal Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 8 Laxmi Narayanapuram",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 8 Pudu Agraharam",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 8 Padidurai Santhu",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 15 Vadakku Madavilaga Theru"
  ] },
  { id: 168, name: "Panchayat Union Elementary School, Vasantha Nagar, Lalgudi", address: "Vasantha Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.8623, lng: 78.8156, votersCount: 1319, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Keela Agraharam",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Ettara Street",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Keela Madavilaga Street",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Keela Veethi",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Vadampokki Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Sunnambukara Street",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 16 Slattar Road",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 18 Meela Veethi",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 18 Sannathi Street",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 18 Chinnachetti Chandu"
  ] },
  { id: 169, name: "Panchayat Union Elementary School, Nannimangalam (NS)", address: "Nannimangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8834, lng: 78.8156, votersCount: 682, areaCovered: [
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 9 Senni Vaikkal Harisana Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 9 Nanimangalam Puthu Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 9 Nanimangalam Pallikuda Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 11 Harijana Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 11 Rottu Theru"
  ] },
  { id: 170, name: "Panchayat Union Elementary School, Nannimangalam (EW)", address: "Nannimangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8844, lng: 78.8166, votersCount: 836, areaCovered: [
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 10 Nanimangalam Agraharam",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 10 Palayakudi Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 10 Keela Kudi Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 10 Manakudi",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 10 Dravidar Nanimangalam"
  ] },
  { id: 171, name: "Panchayat Union Elementary School, Mummudicholamangalam (East)", address: "Mummudicholamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8904, lng: 78.8089, votersCount: 777, areaCovered: [
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 11 Harijana Theru",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 12 Sarayakkadai Santhu",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 10 Pallikooda Theru"
  ] },
  { id: 172, name: "Panchayat Union Elementary School, Mummudicholamangalam (North)", address: "Mummudicholamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8897, lng: 78.8099, votersCount: 811, areaCovered: [
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 12 Vadakku Srinivasapuram",
    "Mummudi Cholamangalam (R.V), Lalgudi (T.P), Ward 12 South Srinivasapuram"
  ] },
  { id: 173, name: "Govt. High School, Vasantha Nagar, Lalgudi", address: "Vasantha Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.8633, lng: 78.8166, votersCount: 1184, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 15 Therku Theru Mela Veethi"
  ] },
  { id: 174, name: "Govt. High School, Vasantha Nagar, Lalgudi (3rd)", address: "Vasantha Nagar, Lalgudi Constituency, Tiruchirappalli", lat: 10.8643, lng: 78.8173, votersCount: 411, areaCovered: [
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 15 Periya Chetti Theru",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 15 Thirumanchana Veethi",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 15 Vadakku Veethi",
    "L. Abishekapuram (R.V), Lalgudi (T.P), Ward 15 Vadakku Madavilaga Theru"
  ] },
  { id: 175, name: "Panchayat Union Middle School, Manakkal (East)", address: "Manakkal, Lalgudi Constituency, Tiruchirappalli", lat: 10.865, lng: 78.822, votersCount: 967, areaCovered: [
    "Manakkal West (R.V), Ward 1 Agraharam",
    "Manakkal West (R.V), Ward 4 Harijana Theru",
    "Manakkal West (R.V), Ward 2 Old Theru"
  ] },
  { id: 176, name: "Panchayat Union Middle School, Manakkal (SSA)", address: "Manakkal, Lalgudi Constituency, Tiruchirappalli", lat: 10.879, lng: 78.825806, votersCount: 827, areaCovered: [
    "Manakkal West (R.V), Ward 3 Susaiyapuram",
    "Manakkal West (R.V), Ward 3 Kamarajapuram",
    "Manakkal West (R.V), Ward 3 Saveriyar Puram"
  ] },
  { id: 177, name: "Sree Sivakami Vidhyasala, Manakkal (East)", address: "Manakkal, Lalgudi Constituency, Tiruchirappalli", lat: 10.865, lng: 78.822, votersCount: 827, areaCovered: [
    "Manakkal West (R.V), Ward 1 Rottu Street",
    "Manakkal West (R.V), Ward 1 Main Road Baburetty Street"
  ] },
  { id: 178, name: "Sree Sivakami Vidhyasala, Manakkal (West)", address: "Manakkal, Lalgudi Constituency, Tiruchirappalli", lat: 10.865, lng: 78.822, votersCount: 720, areaCovered: [
    "Manakkal West (R.V), Ward 2 Agraharam Vadakku Theru",
    "Manakkal West (R.V), Ward 3 Agraharam Mela Theru"
  ] },
  { id: 179, name: "Panchayat Union Elementary School, Koppavali", address: "Koppavali, Lalgudi Constituency, Tiruchirappalli", lat: 10.874389, lng: 78.851306, votersCount: 959, areaCovered: [
    "Manakkal East (R.V), Koppavazhi (P), Ward 1 Road Street",
    "Manakkal East (R.V), Koppavazhi (P), Ward 1 South Street",
    "Manakkal East (R.V), Koppavazhi (P), Ward 2 Nadu Street",
    "Manakkal East (R.V), Koppavazhi (P), Ward 2 South Street",
    "Manakkal East (R.V), Koppavazhi (P), Ward 2 East Street",
    "Manakkal East (R.V), Koppavazhi (P), Ward 2 Indira Nagar"
  ] },
  { id: 180, name: "Govt. HSS, Poovalur (East-Room 3)", address: "Poovalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8985, lng: 78.828194, votersCount: 980, areaCovered: [
    "Poovalur East (R.V), Poovalur (T.P), Ward 5 Puthukudi Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 6 Pathukattu Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 12 Seenivasapuram",
    "Poovalur West (R.V), Poovalur (T.P), Ward 12 Srinivasapuram"
  ] },
  { id: 181, name: "Govt. HSS, Poovalur (West-Room 1)", address: "Poovalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8985, lng: 78.828194, votersCount: 678, areaCovered: [
    "Poovalur East (R.V), Poovalur (T.P), Ward 12 Newkudi Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 12 Nehru Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 12 Pallivasal Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 3 Periyar Street",
    "Poovalur East (R.V), Poovalur (T.P), Ward 3 Kamaraj Colony",
    "Poovalur East (R.V), Poovalur (T.P), Ward 7 Ariyalar Main Road"
  ] },
  { id: 182, name: "Govt. HSS, Poovalur (East-Room 5)", address: "Poovalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8985, lng: 78.828194, votersCount: 851, areaCovered: [
    "Poovalur East (R.V), Poovalur (T.P), Ward 5 Nadu Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 6 Mela Velayudhapettai North Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 4 Thengal"
  ] },
  { id: 183, name: "Panchayat Union Elementary School, Poovalur Mathanam (North)", address: "Poovalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8985, lng: 78.828194, votersCount: 1164, areaCovered: [
    "Poovalur East (R.V), Poovalur (T.P), Ward 10 Thiruvalluvar Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 9 Saveriyar Kovil Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 9 Saveriyar Kovil Street",
    "Poovalur East (R.V), Poovalur (T.P), Ward 9 Madhakovil Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 9 Matha Koil Street"
  ] },
  { id: 184, name: "Govt. HSS, Poovalur (Room 21)", address: "Poovalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.8985, lng: 78.828194, votersCount: 986, areaCovered: [
    "Poovalur East (R.V), Poovalur (T.P), Ward 1 Madavilaga Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 1 Rajaji Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 1 Raja Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 2 Pillaiyar Kovil Theru",
    "Poovalur East (R.V), Poovalur (T.P), Ward 2 Mariyamman Street",
    "Poovalur East (R.V), Poovalur (T.P), Ward 2 Kothari Colony",
    "Poovalur East (R.V), Poovalur (T.P), Ward 2 Main Road",
    "Poovalur East (R.V), Poovalur (T.P), Ward 2 Old Theatre Part",
    "Poovalur East (R.V), Poovalur (T.P), Ward 2 Ariyalur Bypass Road"
  ] },
  { id: 185, name: "Panchayat Union Elementary School, Mathanam (West)", address: "Mathanam, Lalgudi Constituency, Tiruchirappalli", lat: 10.899, lng: 78.835611, votersCount: 572, areaCovered: [
    "Poovalur West (R.V), Poovalur (T.P), Ward 13 Maathanam Vadakku Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 13 Maathanam Therku Theru"
  ] },
  { id: 186, name: "Panchayat Union Elementary School, Mathanam (West-2)", address: "Mathanam, Lalgudi Constituency, Tiruchirappalli", lat: 10.899, lng: 78.835611, votersCount: 716, areaCovered: [
    "Poovalur West (R.V), Poovalur (T.P), Ward 13 Manthai Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 15 Jeevanandham Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 15 Thiru V.Ka. Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 14 Pinnavasal Agraharam",
    "Poovalur West (R.V), Poovalur (T.P), Ward 14 Bharathi Theru"
  ] },
  { id: 187, name: "Panchayat Union Elementary School, Pinnavasal Poovalur", address: "Pinnavasal, Lalgudi Constituency, Tiruchirappalli", lat: 10.899, lng: 78.835694, votersCount: 1083, areaCovered: [
    "Poovalur West (R.V), Poovalur (T.P), Ward 7 Kadai Veethi",
    "Poovalur West (R.V), Poovalur (T.P), Ward 8 Keela Ayyanar Kovil Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 7 Keela Velayudham Pettai",
    "Poovalur West (R.V), Poovalur (T.P), Ward 8 Ayyanar Kovil Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 13 Manthai Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 12 Pudu Theru",
    "Poovalur West (R.V), Poovalur (T.P), Ward 13 Kallar Theru"
  ] },
  { id: 188, name: "Panchayat Union Middle School, Pallapuram (North)", address: "Pallapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.923111, lng: 78.822694, votersCount: 712, areaCovered: [
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 1 Mela Veethi",
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 2 Keela Mela Veethi",
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 3 Keelamela Veethi"
  ] },
  { id: 189, name: "Panchayat Union Middle School, Pallapuram (South)", address: "Pallapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.923111, lng: 78.822694, votersCount: 681, areaCovered: [
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 4 South Street",
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 4 Keela Veethi",
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 4 Harijana Street",
    "Peruvalanallur West (R.V), Pallapuram (P), Ward 4 Saveriyar Kovil Street"
  ] },
  { id: 190, name: "Govt. High School, Peruvalanallur (Addl.)", address: "Peruvalanallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.922694, lng: 78.845, votersCount: 638, areaCovered: [
    "Peruvalanallur East (R.V), Ward 1 Keela Udaiyar Theru",
    "Peruvalanallur East (R.V), Ward 2 Reddiyar Vadakku Theru",
    "Peruvalanallur East (R.V), Ward 2 Reddiyar Therku Theru"
  ] },
  { id: 191, name: "Govt. High School, Peruvalanallur (Middle)", address: "Peruvalanallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.922694, lng: 78.845, votersCount: 783, areaCovered: [
    "Peruvalanallur East (R.V), Ward 2 Mugamathiyar Theru",
    "Peruvalanallur East (R.V), Ward 2 Nadu Veethi",
    "Peruvalanallur East (R.V), Ward 3 Mela Udaiyar Theru",
    "Peruvalanallur East (R.V), Ward 3 South Pallar Theru",
    "Peruvalanallur East (R.V), Ward 3 Paraiyar Theru"
  ] },
  { id: 192, name: "Govt. High School, Peruvalanallur (Left)", address: "Peruvalanallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.922694, lng: 78.845, votersCount: 1160, areaCovered: [
    "Peruvalanallur East (R.V), Ward 3 Gounder Theru",
    "Peruvalanallur East (R.V), Ward 4 Kottarangulam Pallar Theru",
    "Peruvalanallur East (R.V), Ward 4 R.C. Kovil Theru"
  ] },
  { id: 193, name: "Govt. High School, Peruvalanallur (Right)", address: "Peruvalanallur, Lalgudi Constituency, Tiruchirappalli", lat: 10.922694, lng: 78.845, votersCount: 864, areaCovered: [
    "Peruvalanallur East (R.V), Ward 5 Vadakku Pudu Theru",
    "Peruvalanallur East (R.V), Ward 5 Vadakku Pallar Theru"
  ] },
  { id: 194, name: "Panchayat Union Middle School, Ramanathapuram, Kattur", address: "Ramanathapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.8985, lng: 78.859306, votersCount: 842, areaCovered: [
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Vadakku Theru",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Mariyamman Kovil Theru",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Subramaniyar Kovil Theru",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Arasamaram Theru",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Madhakovil Theru",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Harijana Theru",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Mathakovil Theru North",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Cement Road",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Mathakovil Theru South",
    "Edangimangalam (R.V), E. Vellanur (P), Ward 3 Main Road"
  ] },
  { id: 195, name: "Panchayat Union Middle School, E.Vellanur (NS)", address: "E.Vellanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.919306, lng: 78.866611, votersCount: 1072, areaCovered: [
    "Nanjai Sangenthi (R.V), Ward 1 Keela Theru",
    "Nanjai Sangenthi (R.V), Ward 1 Colony Theru",
    "Nanjai Sangenthi (R.V), Ward 2 Mathakovil Theru"
  ] },
  { id: 196, name: "Panchayat Union Middle School, E.Vellanur (NS-North)", address: "E.Vellanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.919306, lng: 78.866611, votersCount: 883, areaCovered: [
    "E. Vellanur (R.V), Ward 1 Vadakku Theru",
    "E. Vellanur (R.V), Ward 1 Thombar Colony",
    "E. Vellanur (R.V), Ward 1 Nadu Theru",
    "E. Vellanur (R.V), Ward 1 Main Road",
    "E. Vellanur (R.V), Ward 1 Pillaiyar Kovil Theru",
    "E. Vellanur (R.V), Ward 1 Sivankovil",
    "E. Vellanur (R.V), Ward 1 Vadakku Thottam",
    "E. Vellanur (R.V), Ward 1 Muslim Theru",
    "E. Vellanur (R.V), Ward 1 Gownder Theru",
    "E. Vellanur (R.V), Ward 1 Palaniyandi Nagar"
  ] },
  { id: 197, name: "Panchayat Union Middle School, E.Vellanur (EW-North)", address: "E.Vellanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.919306, lng: 78.866694, votersCount: 868, areaCovered: [
    "E. Vellanur (R.V), Ward 2 Sandhyakapper Kovil Theru",
    "E. Vellanur (R.V), Ward 2 Anthoniar Kovil Theru",
    "E. Vellanur (R.V), Ward 2 Therku Theru",
    "E. Vellanur (R.V), Ward 2 T.E.L.C. Kovil Theru",
    "E. Vellanur (R.V), Ward 2 Anna Nagar",
    "E. Vellanur (R.V), Ward 2 K.N. Nehru Nagar"
  ] },
  { id: 198, name: "Panchayat Union Middle School, E.Vellanur (EW-East)", address: "E.Vellanur, Lalgudi Constituency, Tiruchirappalli", lat: 10.919306, lng: 78.866694, votersCount: 594, areaCovered: [
    "E. Vellanur (R.V), Ward 4 Main Road",
    "E. Vellanur (R.V), Ward 4 Pillaiyar Kovil Theru",
    "E. Vellanur (R.V), Ward 4 Perumal Kovil Theru",
    "E. Vellanur (R.V), Ward 4 Vadakku Theru",
    "E. Vellanur (R.V), Ward 4 Nadu Street",
    "E. Vellanur (R.V), Ward 4 Sivankovil Street",
    "E. Vellanur (R.V), Ward 4 South Theru",
    "E. Vellanur (R.V), Ward 4 M.G.R Nagar"
  ] },
  { id: 199, name: "Aided Elementary School, Kattur (North)", address: "Kattur, Lalgudi Constituency, Tiruchirappalli", lat: 10.891306, lng: 78.855, votersCount: 1123, areaCovered: [
    "Sirumayangudi West (R.V), Ward 1 Muthaliyar Theru",
    "Sirumayangudi West (R.V), Ward 1 Sivankovil Theru",
    "Sirumayangudi West (R.V), Ward 1 Pillaiyar Kovil Theru",
    "Sirumayangudi West (R.V), Ward 1 Saveriyar Kovil Theru"
  ] },
  { id: 200, name: "Aided Elementary School, Sirumayangudi West (South)", address: "Sirumayangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.891306, lng: 78.855, votersCount: 810, areaCovered: [
    "Sirumayangudi West (R.V), Ward 1 Udaiyar Theru",
    "Sirumayangudi West (R.V), Ward 1 Bharathi Nagar",
    "Sirumayangudi West (R.V), Ward 1 Railway Station Road",
    "Sirumayangudi West (R.V), Ward 1 Sappani Colony",
    "Sirumayangudi West (R.V), Ward 1 Thangam Colony",
    "Sirumayangudi West (R.V), Ward 1 Kattur Main Road",
    "Sirumayangudi West (R.V), Ward 1,2 Kothari Colony",
    "Sirumayangudi West (R.V), Ward 2,3 Ramanathapuram",
    "Sirumayangudi West (R.V), Ward 1,2 Amman Nagar"
  ] },
  { id: 201, name: "Community Hall, Kothamangalam (Addl.)", address: "Kothamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.892694, lng: 78.858306, votersCount: 703, areaCovered: [
    "Sirumayangudi West (R.V), Ward 2 Krishnapuram Udaiyar Theru",
    "Sirumayangudi West (R.V), Ward 2 Kattur Main Road",
    "Sirumayangudi West (R.V), Ward 3 Kothamangalam Bhagavathiamman Kovil Theru"
  ] },
  { id: 202, name: "Community Hall, Kothamangalam (New)", address: "Kothamangalam, Lalgudi Constituency, Tiruchirappalli", lat: 10.892694, lng: 78.858306, votersCount: 584, areaCovered: [
    "Sirumayangudi West (R.V), Ward 3 Kothamangalam Kuditheru",
    "Sirumayangudi West (R.V), Ward 3 Ramanathapuram"
  ] },
  { id: 203, name: "Panchayat Union Elementary School, Sirumayangudi East (South)", address: "Sirumayangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8925, lng: 78.870194, votersCount: 869, areaCovered: [
    "Sirumayangudi East (R.V), Ward 4 Kasbha Agraharam",
    "Sirumayangudi East (R.V), Ward 4 Kudi Theru",
    "Sirumayangudi East (R.V), Ward 4 Pallar Theru",
    "Sirumayangudi East (R.V), Ward 4 Parai Theru"
  ] },
  { id: 204, name: "Panchayat Union Elementary School, Sirumayangudi East (North)", address: "Sirumayangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.8925, lng: 78.870306, votersCount: 867, areaCovered: [
    "Sirumayangudi East (R.V), Ward 4 Pattakaseri Kuditheru",
    "Sirumayangudi East (R.V), Ward 5 Pattakaseri Keela Theru",
    "Sirumayangudi East (R.V), Ward 4 Gownder Theru",
    "Sirumayangudi East (R.V), Ward 5 Saveriyar Kovil Theru",
    "Sirumayangudi East (R.V), Ward 5 Main Road",
    "Sirumayangudi East (R.V), Ward 5 Nadu Theru",
    "Sirumayangudi East (R.V), Ward 5 Pattakaseri Kudi Theru"
  ] },
  { id: 205, name: "Thiruvalluvar Aided Middle School, Komagudi", address: "Komagudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.897111, lng: 78.883694, votersCount: 923, areaCovered: [
    "Gomakudi (R.V), Ward 1 Komakudi Kudi Theru",
    "Gomakudi (R.V), Ward 1 South Theru",
    "Gomakudi (R.V), Ward 2 North Theru",
    "Gomakudi (R.V), Ward 3 Palliar Theru",
    "Gomakudi (R.V), Ward 3 Mela Theru"
  ] },
  { id: 206, name: "S.P.G Aided Elementary School, Sembarai (North)", address: "Sembarai, Lalgudi Constituency, Tiruchirappalli", lat: 10.897611, lng: 78.890194, votersCount: 930, areaCovered: [
    "Sembarai (R.V), Ward 1 Kudi Theru",
    "Sembarai (R.V), Ward 1 Keela Theru",
    "Sembarai (R.V), Ward 2 Main Road"
  ] },
  { id: 207, name: "S.P.G Aided Elementary School, Sembarai (South)", address: "Sembarai, Lalgudi Constituency, Tiruchirappalli", lat: 10.897611, lng: 78.890306, votersCount: 842, areaCovered: [
    "Sembarai (R.V), Ward 2 Harijana Theru",
    "Sembarai (R.V), Ward 3 Vinayakapuram"
  ] },
  { id: 208, name: "Panchayat Union Elementary School, Thinniam (East)", address: "Thinniam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8865, lng: 78.896389, votersCount: 1133, areaCovered: [
    "Thinniyam (R.V), Ward 1 Agraharam",
    "Thinniyam (R.V), Ward 1 Kudi Theru",
    "Thinniyam (R.V), Ward 1 Nadu Theru",
    "Thinniyam (R.V), Ward 1 North Theru",
    "Thinniyam (R.V), Ward 1 Mela Theru",
    "Thinniyam (R.V), Ward 2 Pallar Theru",
    "Thinniyam (R.V), Ward 2 Para Theru",
    "Thinniyam (R.V), Ward 2 Singara Theru",
    "Thinniyam (R.V), Ward 2 Sakkiliyar Theru"
  ] },
  { id: 209, name: "Panchayat Union Elementary School, Thinniam (West)", address: "Thinniam, Lalgudi Constituency, Tiruchirappalli", lat: 10.8865, lng: 78.896389, votersCount: 618, areaCovered: [
    "Thinniyam (R.V), Ward 3 Manakkolai",
    "Thinniyam (R.V), Ward 3 Pallivasal",
    "Thinniyam (R.V), Ward 3 Devankudi Keela Theru",
    "Thinniyam (R.V), Ward 3 Devankudi Road",
    "Thinniyam (R.V), Ward 3 Devankudi Mela Theru"
  ] },
  { id: 210, name: "TELC Aided Elementary School, Mettupatti", address: "Mettupatti, Lalgudi Constituency, Tiruchirappalli", lat: 10.889694, lng: 78.874389, votersCount: 985, areaCovered: [
    "Mettupatti (R.V), Ward 2 Mettupatti Kurichi",
    "Mettupatti (R.V), Ward 1 Kovil Theru",
    "Mettupatti (R.V), Ward 1 Mela Theru",
    "Mettupatti (R.V), Ward 1 North Theru",
    "Mettupatti (R.V), Ward 1 South Theru"
  ] },
  { id: 211, name: "St. Anthoniar Elementary School, Konnaikudi", address: "Konnaikudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.875111, lng: 78.867306, votersCount: 1113, areaCovered: [
    "Jengamarajapuram (R.V), Ward 1 Konnaikudi Keela Theru",
    "Jengamarajapuram (R.V), Ward 2 Mela Theru",
    "Jengamarajapuram (R.V), Ward 2 Harijana Theru"
  ] },
  { id: 212, name: "Panchayat Union Elementary School, Vazhuthiyur (East)", address: "Vazhuthiyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.87, lng: 78.855889, votersCount: 783, areaCovered: [
    "Athikudi (R.V), Ward 1 Athikudi Agraharam",
    "Athikudi (R.V), Ward 1 Sivankovil Theru",
    "Athikudi (R.V), Ward 1 Athikudi Kudi Theru",
    "Athikudi (R.V), Ward 1 Main Road",
    "Athikudi (R.V), Ward 2 Natarajapuram Pudu Theru",
    "Athikudi (R.V), Ward 5 Valuthiyur Uppiliya Theru",
    "Athikudi (R.V), Ward 6 Valuthiyur Sandhyakapper Kovil Theru"
  ] },
  { id: 213, name: "Panchayat Union Elementary School, Vazhuthiyur (West)", address: "Vazhuthiyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.87, lng: 78.855889, votersCount: 730, areaCovered: [
    "Athikudi (R.V), Ward 2 Natarajapuram",
    "Athikudi (R.V), Ward 6 Valuthiyur Mariyamman Kovil Theru",
    "Athikudi (R.V), Ward 6 Valuthiyur Sebastiyar Kovil Theru",
    "Athikudi (R.V), Ward 7 Govindapuram"
  ] },
  { id: 214, name: "Panchayat Union Elementary School, Vazhuthiyur (NS-North)", address: "Vazhuthiyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.87, lng: 78.855889, votersCount: 755, areaCovered: [
    "Athikudi (R.V), Ward 3 Keela Pallar Theru",
    "Athikudi (R.V), Ward 4,5 Valuthiyur Kuditheru",
    "Athikudi (R.V), Ward 2 Natarajapuram Pudu Theru"
  ] },
  { id: 215, name: "Panchayat Union Elementary School, Vazhuthiyur (NS-South)", address: "Vazhuthiyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.87, lng: 78.855889, votersCount: 805, areaCovered: [
    "Athikudi (R.V), Ward 5 Valuthiyur Pudu Theru",
    "Athikudi (R.V), Ward 5 Valuthiyur Uppiliyar Theru",
    "Athikudi (R.V), Ward 6 Valuthiyur Mariyamman Kovil Theru",
    "Athikudi (R.V), Ward 6 Valuthiyur Sandhyakapper Kovil Theru",
    "Athikudi (R.V), Ward 6 Valuthiyur Sebastiyar Kovil Theru",
    "Athikudi (R.V), Ward 2 Natarajapuram"
  ] },
  { id: 216, name: "Panchayat Union Elementary School, Mangammalpuram (West)", address: "Mangammalpuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.868306, lng: 78.882889, votersCount: 810, areaCovered: [
    "Jenkamarajapuram (R.V), Ward 1 Jenkamarajapuram Kudi Theru",
    "Jenkamarajapuram (R.V), Ward 2 Senkamarajapuram Mission Theru"
  ] },
  { id: 217, name: "Panchayat Union Elementary School, Mangammalpuram (East)", address: "Mangammalpuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.868306, lng: 78.882889, votersCount: 884, areaCovered: [
    "Jenkamarajapuram (R.V), Ward 2 Achramavallipuram",
    "Jenkamarajapuram (R.V), Ward 2 Anna Nagar",
    "Jenkamarajapuram (R.V), Ward 2 Vadakku Harijana Theru"
  ] },
  { id: 218, name: "Govt. HSS, Mangammalpuram (Room 15)", address: "Mangammalpuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.868306, lng: 78.882889, votersCount: 1087, areaCovered: [
    "Mangammalpuram (R.V), Ward 1 Agraharam",
    "Mangammalpuram (R.V), Ward 1 Kudi Theru",
    "Mangammalpuram (R.V), Ward 1 Vaniyar Theru",
    "Mangammalpuram (R.V), Ward 2 Mela Anbil",
    "Mangammalpuram (R.V), Ward 2 Uppiliya Street",
    "Mangammalpuram (R.V), Ward 2 Kottai Medu",
    "Mangammalpuram (R.V), Ward 2 Vellar Street",
    "Mangammalpuram (R.V), Ward 2 Biramangalam"
  ] },
  { id: 219, name: "Govt. HSS, Mangammalpuram (Room 2)", address: "Mangammalpuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.868306, lng: 78.882889, votersCount: 1124, areaCovered: [
    "Mangammalpuram (R.V), Ward 3 Kaliamman Kovil Theru",
    "Mangammalpuram (R.V), Ward 3 Saveriyar Kovil Theru",
    "Mangammalpuram (R.V), Ward 4 Vengatachalapuram",
    "Mangammalpuram (R.V), Ward 4 Anbil Badhuvai",
    "Mangammalpuram (R.V), Ward 4 Ananthi Medu",
    "Mangammalpuram (R.V), Ward 4 Kuditheru Korai Kollai"
  ] },
  { id: 220, name: "Adi Dravidar Welfare HSS, Keelanbil (East)", address: "Keelanbil, Lalgudi Constituency, Tiruchirappalli", lat: 10.867389, lng: 78.890306, votersCount: 672, areaCovered: [
    "Kelanbil (R.V), Ward 1 Agraharam",
    "Kelanbil (R.V), Ward 1 Road Theru",
    "Kelanbil (R.V), Ward 2 North Theru",
    "Kelanbil (R.V), Ward 2 Machu Theru",
    "Kelanbil (R.V), Ward 2 Nedutheru"
  ] },
  { id: 221, name: "Adi Dravidar Welfare HSS, Keelanbil (West)", address: "Keelanbil, Lalgudi Constituency, Tiruchirappalli", lat: 10.867389, lng: 78.890306, votersCount: 660, areaCovered: [
    "Kelanbil (R.V), Ward 1 Kottai Medu",
    "Kelanbil (R.V), Ward 2 Mariyamman Kovil Theru",
    "Kelanbil (R.V), Ward 2 Baruthikal"
  ] },
  { id: 222, name: "Panchayat Union Middle School, Ariyur (NS)", address: "Ariyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.874194, lng: 78.909194, votersCount: 1141, areaCovered: [
    "Ariyur (R.V), Ward 1 Eratai Theru",
    "Ariyur (R.V), Ward 1 Othatheru",
    "Ariyur (R.V), Ward 1 Vadakku Theru",
    "Ariyur (R.V), Ward 1 Therku Theru",
    "Ariyur (R.V), Ward 2 Pudu Theru",
    "Ariyur (R.V), Ward 2 Ashoka Puram",
    "Ariyur (R.V), Ward 2 Vayal Theru"
  ] },
  { id: 223, name: "RC Aided Elementary School, Ariyur", address: "Ariyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.869389, lng: 78.9095, votersCount: 706, areaCovered: [
    "Ariyur (R.V), Ward 3 Pallar Theru",
    "Ariyur (R.V), Ward 3 Inasiyar Kovil Theru",
    "Ariyur (R.V), Ward 3 Nadu Theru",
    "Ariyur (R.V), Ward 3 Savoriyar Kovil Street",
    "Ariyur (R.V), Ward 3 Kaliamman Kovil Street"
  ] },
  { id: 224, name: "TELC High School, Sengaraiyur", address: "Sengaraiyur, Lalgudi Constituency, Tiruchirappalli", lat: 10.869806, lng: 78.91, votersCount: 926, areaCovered: [
    "Ariyur (R.V), Ward 4 Kallar Theru",
    "Ariyur (R.V), Ward 4 Kaliamman Kovil Theru",
    "Ariyur (R.V), Ward 4 Thoppu Theru",
    "Ariyur (R.V), Ward 5 Christhuvar Theru",
    "Ariyur (R.V), Ward 5 Meenavar Colony"
  ] },
  { id: 225, name: "Panchayat Union Elementary School, T.Kallikudi (South)", address: "T.Kallikudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.885694, lng: 78.930111, votersCount: 734, areaCovered: [
    "T. Kallikudi (R.V), Ward 1 Kuyavar Theru",
    "T. Kallikudi (R.V), Ward 1 Vadakku Theru",
    "T. Kallikudi (R.V), Ward 1 Nadu Theru",
    "T. Kallikudi (R.V), Ward 2 Therku Theru"
  ] },
  { id: 226, name: "Panchayat Union Elementary School, T.Kallikudi (NS)", address: "T.Kallikudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.885694, lng: 78.930111, votersCount: 611, areaCovered: [
    "T. Kallikudi (R.V), Ward 2 Kaliamman Kovil Theru",
    "T. Kallikudi (R.V), Ward 2 Servaikaran Theru",
    "T. Kallikudi (R.V), Ward 2 Ubhakara Madha Kovil Theru",
    "T. Kallikudi (R.V), Ward 2 Indira Nagar"
  ] },
  { id: 227, name: "Arulanandar Memorial School, Mullal", address: "Mullal, Lalgudi Constituency, Tiruchirappalli", lat: 10.9015, lng: 78.915194, votersCount: 845, areaCovered: [
    "T. Kallikudi (R.V), Ward 3 Kallar Theru",
    "T. Kallikudi (R.V), Ward 3 Agraharam",
    "T. Kallikudi (R.V), Ward 3 Gounder Theru",
    "T. Kallikudi (R.V), Ward 4 Pallar Theru",
    "T. Kallikudi (R.V), Ward 4 Harijana Street"
  ] },
  { id: 228, name: "Panchayat Union Elementary School, Alangudimahajanam", address: "Alangudimahajanam, Lalgudi Constituency, Tiruchirappalli", lat: 10.893111, lng: 78.926306, votersCount: 1233, areaCovered: [
    "Alangudi Mahajanam (R.V), Ward 1 Kallar Theru",
    "Alangudi Mahajanam (R.V), Ward 3 Kumarapalayam",
    "Alangudi Mahajanam (R.V), Ward 4 Harijana Theru",
    "Alangudi Mahajanam (R.V), Ward 4 K.V. Pettai",
    "Alangudi Mahajanam (R.V), Ward 2 Kollu Medu"
  ] },
  { id: 229, name: "Panchayat Union Elementary School, Natham", address: "Natham, Lalgudi Constituency, Tiruchirappalli", lat: 10.900194, lng: 78.942694, votersCount: 912, areaCovered: [
    "Nathamangudi (R.V), Nattham (P), Ward 2 Harijana Theru",
    "Nathamangudi (R.V), Nattham (P), Ward 1 Nadu Theru",
    "Nathamangudi (R.V), Nattham (P), Ward 1 Keela Theru",
    "Nathamangudi (R.V), Nattham (P), Ward 1 Kuditheru (Main Road Therku Theru)"
  ] },
  { id: 230, name: "Panchayat Union Middle School, Mangudi", address: "Mangudi, Lalgudi Constituency, Tiruchirappalli", lat: 10.9015, lng: 78.915194, votersCount: 960, areaCovered: [
    "Nathamangudi (R.V), Mangudi (P), Ward 1 Keela Veethi",
    "Nathamangudi (R.V), Mangudi (P), Ward 2 Mela Veethi",
    "Nathamangudi (R.V), Mangudi (P), Ward 3 Pallar Theru",
    "Nathamangudi (R.V), Mangudi (P), Ward 3 Paraiyar Theru"
  ] },
  { id: 231, name: "SPG Mission Elementary School, Venkatachalapuram (South)", address: "Venkatachalapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.900194, lng: 78.942694, votersCount: 1173, areaCovered: [
    "Venkatachalapuram South (R.V), Ward 1 Manakadu",
    "Venkatachalapuram South (R.V), Ward 1 Anna Nagar",
    "Venkatachalapuram South (R.V), Ward 3 Senkariyur Salai",
    "Venkatachalapuram South (R.V), Ward 4 Saveriyar Kovil Theru",
    "Venkatachalapuram South (R.V), Ward 2 Saveriyar Kovil Theru",
    "Venkatachalapuram South (R.V), Ward 2 Senkariyur Salai",
    "Venkatachalapuram South (R.V), Ward 2 Pallikudath Theru",
    "Venkatachalapuram South (R.V), Ward 2 South Manthai Theru",
    "Venkatachalapuram South (R.V), Ward 3 Madhakovil Theru",
    "Venkatachalapuram South (R.V), Ward 3 Munseep Theru",
    "Venkatachalapuram South (R.V), Ward 3 South Manthai Theru"
  ] },
  { id: 232, name: "SPG Mission Elementary School, Venkatachalapuram (West)", address: "Venkatachalapuram, Lalgudi Constituency, Tiruchirappalli", lat: 10.900194, lng: 78.942694, votersCount: 708, areaCovered: [
    "Venkatachalapuram North (R.V), Ward 1 Senkarai Salai",
    "Venkatachalapuram North (R.V), Ward 1 Sivan Kovil Street",
    "Venkatachalapuram North (R.V), Ward 4 Mela Street",
    "Venkatachalapuram North (R.V), Ward 4 Mariyamman Kovil Street",
    "Venkatachalapuram North (R.V), Ward 4 Mela Eari Karai Street",
    "Venkatachalapuram North (R.V), Ward 4 Manakkadu",
    "Venkatachalapuram North (R.V), Ward 4 Thirumalapadi Road"
  ] },
  { id: 233, name: "St. James RC Middle School, Kovandakuruchi (1)", address: "Kovandakuruchi, Lalgudi Constituency, Tiruchirappalli", lat: 10.936806, lng: 78.940111, votersCount: 1168, areaCovered: [
    "Govandakurchi (R.V), Ward 2 Perumal Kovil Theru",
    "Govandakurchi (R.V), Ward 2 Mela Theru",
    "Govandakurchi (R.V), Ward 1 and 2 Rastha Veethi",
    "Govandakurchi (R.V), Ward 2 Muthaliyar Theru",
    "Govandakurchi (R.V), Ward 2 Sembaiyar Theru",
    "Govandakurchi (R.V), Ward 3 Anthoniyaar Kovil Theru"
  ] },
  { id: 234, name: "St. James RC Middle School, Kovandakuruchi (East-1)", address: "Kovandakuruchi, Lalgudi Constituency, Tiruchirappalli", lat: 10.936806, lng: 78.940111, votersCount: 648, areaCovered: [
    "Govandakurchi (R.V), Ward 1 East Street",
    "Govandakurchi (R.V), Ward 1 Nadu Street",
    "Govandakurchi (R.V), Ward 1 South Street"
  ] },
  { id: 235, name: "St. James RC Middle School, Kovandakuruchi (East-2)", address: "Kovandakuruchi, Lalgudi Constituency, Tiruchirappalli", lat: 10.936806, lng: 78.940111, votersCount: 732, areaCovered: [
    "Govandakurchi (R.V), Ward 3 North Street",
    "Govandakurchi (R.V), Ward 3 Udaiyar Street"
  ] },
  { id: 236, name: "Govt. HSS, Pudurpalayam (Room 2)", address: "Pudurpalayam, Lalgudi Constituency, Tiruchirappalli", lat: 10.9445, lng: 78.949194, votersCount: 603, areaCovered: [
    "Pudur Palayam (R.V), Ward 1 Therku Theru",
    "Pudur Palayam (R.V), Ward 1 Mela Theru",
    "Pudur Palayam (R.V), Ward 1 Nadu Theru"
  ] },
  { id: 237, name: "Govt. HSS, Pudurpalayam (Room 4)", address: "Pudurpalayam, Lalgudi Constituency, Tiruchirappalli", lat: 10.9445, lng: 78.942, votersCount: 724, areaCovered: [
    "Pudur Palayam (R.V), Ward 2 Pillaiyar Kovil Theru",
    "Pudur Palayam (R.V), Ward 2 Mela Theru",
    "Pudur Palayam (R.V), Ward 2 Keela Theru",
    "Pudur Palayam (R.V), Ward 2 Main Road",
    "Pudur Palayam (R.V), Ward 2 Colony",
    "Pudur Palayam (R.V), Ward 2 Rice Mill Theru",
    "Pudur Palayam (R.V), Ward 3 Saveriyar Kovil Theru"
  ] },
  { id: 238, name: "Panchayat Union Elementary School, Vandarampalayam", address: "Vandarampalayam, Lalgudi Constituency, Tiruchirappalli", lat: 10.945389, lng: 78.927611, votersCount: 1046, areaCovered: [
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Therku Theru",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Kaliamman Kovil Theru",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Vadakku Theru",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Mela Theru",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Madhakovil Theru",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Keela Theru",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Anthoniyaar Kovil Street",
    "Pudurpalayam (R.V), Vanathirain Palayam (P), Ward 4 Main Road"
  ] },
  { id: 239, name: "Panchayat Union Middle School, Alambakkam (Old-1)", address: "Alambakkam, Lalgudi Constituency, Tiruchirappalli", lat: 10.925, lng: 78.955806, votersCount: 824, areaCovered: [
    "Alambakkam (R.V), Ward 1 Vadakku Theru",
    "Alambakkam (R.V), Ward 1 Santhaipettai Theru"
  ] },
  { id: 240, name: "Panchayat Union Middle School, Alambakkam (Old-2)", address: "Alambakkam, Lalgudi Constituency, Tiruchirappalli", lat: 10.925, lng: 78.955806, votersCount: 618, areaCovered: [
    "Alambakkam (R.V), Ward 2 Keela Theru",
    "Alambakkam (R.V), Ward 2 Nadu Theru"
  ] },
  { id: 241, name: "Panchayat Union Middle School, Alambakkam (New)", address: "Alambakkam, Lalgudi Constituency, Tiruchirappalli", lat: 10.925, lng: 78.955889, votersCount: 721, areaCovered: [
    "Alambakkam (R.V), Ward 3 Ayyankeni Theru",
    "Alambakkam (R.V), Ward 3 Therku Theru"
  ] },
  { id: 242, name: "Panchayat Union Middle School, Alambakkam (Old-3)", address: "Alambakkam, Lalgudi Constituency, Tiruchirappalli", lat: 10.925, lng: 78.955889, votersCount: 740, areaCovered: [
    "Alambakkam (R.V), Ward 4 Pandara Theru",
    "Alambakkam (R.V), Ward 4 Mela Theru",
    "Alambakkam (R.V), Ward 4 Gounder Theru",
    "Alambakkam (R.V), Ward 5 Pallar Theru"
  ] },
  { id: 243, name: "Panchayat Union Elementary School, Thinnakulam (West)", address: "Thinnakulam, Lalgudi Constituency, Tiruchirappalli", lat: 10.910806, lng: 78.977611, votersCount: 1089, areaCovered: [
    "Viragalur (R.V), Thinnakulam (P), Ward 1 and 2 Thinnakulam Kudi Theru"
  ] },
  { id: 244, name: "Panchayat Union Elementary School, Thinnakulam (East)", address: "Thinnakulam, Lalgudi Constituency, Tiruchirappalli", lat: 10.910806, lng: 78.977611, votersCount: 350, areaCovered: [
    "Viragalur (R.V), Thinnakulam (P), Ward 3 Harijana Theru"
  ] },
  { id: 245, name: "St. Peter HSS, Virahalur (East)", address: "Virahalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.911389, lng: 78.977306, votersCount: 1059, areaCovered: [
    "Verakalur (R.V), Ward 1 and 2 Keela Veethi Vada Puram",
    "Verakalur (R.V), Ward 3 Keela Veethi Thenpuram"
  ] },
  { id: 246, name: "St. Peter HSS, Virahalur (West)", address: "Virahalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.910806, lng: 78.977611, votersCount: 660, areaCovered: [
    "Verakalur (R.V), Ward 2 and 3 Mela Veethi Vada Puram",
    "Verakalur (R.V), Ward 2 and 3 Mela Veethi Thenpuram"
  ] },
  { id: 247, name: "RC Elizabeth Girls Elementary School, Virahalur", address: "Virahalur, Lalgudi Constituency, Tiruchirappalli", lat: 10.911389, lng: 78.977389, votersCount: 628, areaCovered: [
    "Viragalur (R.V), Ward 4 Harijana Theru (Pallar)",
    "Viragalur (R.V), Ward 5 Harijana Theru (Paraiyar)"
  ] },
  { id: 248, name: "Panchayat Union Elementary School, Alambadi (1)", address: "Alambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.906694, lng: 79.000306, votersCount: 673, areaCovered: [
    "Alambadi (R.V), Ward 1 Aathi Dravidar Vadakku Theru",
    "Alambadi (R.V), Ward 2 Therku Theru"
  ] },
  { id: 249, name: "Panchayat Union Elementary School, Alambadi (2)", address: "Alambadi, Lalgudi Constituency, Tiruchirappalli", lat: 10.906694, lng: 79.000306, votersCount: 863, areaCovered: [
    "Alambadi (R.V), Ward 2 Mettu Vadakku Theru",
    "Alambadi (R.V), Ward 2 Pushpa Puram",
    "Alambadi (R.V), Ward 3 Thanga Salai",
    "Alambadi (R.V), Ward 3 Aadhi Dravidar Therku Theru"
  ] },
];
