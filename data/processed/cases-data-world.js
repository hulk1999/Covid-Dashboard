const casesDataWorld = {
  src: "https://www.worldometers.info/coronavirus/",
  DailyCases: [[1579651200000,0],[1579737600000,271],[1579824000000,475],[1579910400000,701],[1579996800000,787],[1580083200000,1784],[1580169600000,1479],[1580256000000,1764],[1580342400000,2016],[1580428800000,2137],[1580515200000,2626],[1580601600000,2857],[1580688000000,3253],[1580774400000,3927],[1580860800000,3728],[1580947200000,3184],[1581033600000,3453],[1581120000000,2685],[1581206400000,3004],[1581292800000,2569],[1581379200000,2057],[1581465600000,14180],[1581552000000,5174],[1581638400000,2682],[1581724800000,2132],[1581811200000,2158],[1581897600000,2031],[1581984000000,1880],[1582070400000,534],[1582156800000,1034],[1582243200000,1058],[1582329600000,1038],[1582416000000,628],[1582502400000,993],[1582588800000,861],[1582675200000,1136],[1582761600000,1459],[1582848000000,1819],[1582934400000,2206],[1583020800000,2636],[1583107200000,2615],[1583193600000,3307],[1583280000000,3169],[1583366400000,4323],[1583452800000,5055],[1583539200000,5747],[1583625600000,5856],[1583712000000,7218],[1583798400000,8779],[1583884800000,11288],[1583971200000,14094],[1584057600000,16672],[1584144000000,17423],[1584230400000,18861],[1584316800000,20779],[1584403200000,23967],[1584489600000,28119],[1584576000000,32136],[1584662400000,38507],[1584748800000,33939],[1584835200000,37157],[1584921600000,43990],[1585008000000,46216],[1585094400000,50156],[1585180800000,62363],[1585267200000,67397],[1585353600000,67835],[1585440000000,61215],[1585526400000,64265],[1585612800000,76729],[1585699200000,78533],[1585785600000,79175],[1585872000000,86885],[1585958400000,82048],[1586044800000,74749],[1586131200000,76315],[1586217600000,83423],[1586304000000,88952],[1586390400000,90115],[1586476800000,98160],[1586563200000,86148],[1586649600000,77007],[1586736000000,76811],[1586822400000,80554],[1586908800000,87866],[1586995200000,88105],[1587081600000,91170],[1587168000000,85406],[1587254400000,79430],[1587340800000,83334],[1587427200000,82411],[1587513600000,84773],[1587600000000,89197],[1587686400000,97245],[1587772800000,91968],[1587859200000,76027],[1587945600000,71796],[1588032000000,79360],[1588118400000,89159],[1588204800000,89328],[1588291200000,95350],[1588377600000,83124],[1588464000000,82886],[1588550400000,81484],[1588636800000,84442],[1588723200000,97451],[1588809600000,97380],[1588896000000,97374],[1588982400000,89193],[1589068800000,80862],[1589155200000,73951],[1589241600000,89602],[1589328000000,92776],[1589414400000,98470],[1589500800000,103080],[1589587200000,97608],[1589673600000,84727],[1589760000000,92394],[1589846400000,99593],[1589932800000,106122],[1590019200000,109431],[1590105600000,110431],[1590192000000,103411],[1590278400000,98882],[1590364800000,92366],[1590451200000,95493],[1590537600000,110117],[1590624000000,120511],[1590710400000,129688],[1590796800000,127443],[1590883200000,111677],[1590969600000,103827],[1591056000000,120590],[1591142400000,124062],[1591228800000,134155],[1591315200000,133938],[1591401600000,131657],[1591488000000,117300],[1591574400000,110435],[1591660800000,125236],[1591747200000,140307],[1591833600000,141987],[1591920000000,145247],[1592006400000,138249],[1592092800000,126868],[1592179200000,129027],[1592265600000,149149],[1592352000000,151314],[1592438400000,146073],[1592524800000,186638],[1592611200000,162727],[1592697600000,134867],[1592784000000,143470],[1592870400000,169240],[1592956800000,180089],[1593043200000,186482],[1593129600000,199703],[1593216000000,184300],[1593302400000,168554],[1593388800000,163321],[1593475200000,183753],[1593561600000,203965],[1593648000000,216383],[1593734400000,219663],[1593820800000,200700],[1593907200000,180385],[1593993600000,177011],[1594080000000,216457],[1594166400000,220965],[1594252800000,231076],[1594339200000,242941],[1594425600000,222947],[1594512000000,202386],[1594598400000,196883],[1594684800000,228143],[1594771200000,241942],[1594857600000,254348],[1594944000000,245986],[1595030400000,232661],[1595116800000,223468],[1595203200000,205753],[1595289600000,246930],[1595376000000,286428],[1595462400000,280743],[1595548800000,294106],[1595635200000,268332],[1595721600000,224649],[1595808000000,218616],[1595894400000,256432],[1595980800000,296524],[1596067200000,291496],[1596153600000,295897],[1596240000000,264723],[1596326400000,225363],[1596412800000,202456],[1596499200000,260630],[1596585600000,278426],[1596672000000,287918],[1596758400000,288206],[1596844800000,276322],[1596931200000,227355],[1597017600000,220350],[1597104000000,274752],[1597190400000,294949],[1597276800000,291372],[1597363200000,294851],[1597449600000,270931],[1597536000000,221830],[1597622400000,205063],[1597708800000,265507],[1597795200000,280930],[1597881600000,277157],[1597968000000,269583],[1598054400000,272891],[1598140800000,217631],[1598227200000,219678],[1598313600000,262986],[1598400000000,282817],[1598486400000,282483],[1598572800000,294903],[1598659200000,269810],[1598745600000,230934],[1598832000000,250682],[1598918400000,268703],[1599004800000,293560],[1599091200000,294388],[1599177600000,312486],[1599264000000,282260],[1599350400000,244242],[1599436800000,207022],[1599523200000,252747],[1599609600000,295310],[1599696000000,307599],[1599782400000,324638],[1599868800000,296428],[1599955200000,257635],[1600041600000,251066],[1600128000000,290029],[1600214400000,312877],[1600300800000,319124],[1600387200000,329196],[1600473600000,304965],[1600560000000,259907],[1600646400000,239320],[1600732800000,288294],[1600819200000,318314],[1600905600000,320762],[1600992000000,330762],[1601078400000,307264],[1601164800000,263176],[1601251200000,239155],[1601337600000,296234],[1601424000000,323291],[1601510400000,327681],[1601596800000,333730],[1601683200000,305593],[1601769600000,261532],[1601856000000,273339],[1601942400000,318452],[1602028800000,353953],[1602115200000,363059],[1602201600000,366464],[1602288000000,379621],[1602374400000,296415],[1602460800000,276370],[1602547200000,326203],[1602633600000,389187],[1602720000000,406017],[1602806400000,421109],[1602892800000,404193],[1602979200000,350676],[1603065600000,339065],[1603152000000,398211],[1603238400000,449557],[1603324800000,487768],[1603411200000,497357],[1603497600000,487083],[1603584000000,436559],[1603670400000,402409],[1603756800000,474814],[1603843200000,521203],[1603929600000,551735],[1604016000000,577153],[1604102400000,514176],[1604188800000,475667],[1604275200000,455157],[1604361600000,506604],[1604448000000,577308],[1604534400000,627799],[1604620800000,630523],[1604707200000,642697],[1604793600000,509408],[1604880000000,473298],[1604966400000,573710],[1605052800000,630509],[1605139200000,654751],[1605225600000,664877],[1605312000000,616153],[1605398400000,523549],[1605484800000,493572],[1605571200000,579949],[1605657600000,624107],[1605744000000,667015],[1605830400000,671502],[1605916800000,619984],[1606003200000,529967],[1606089600000,527660],[1606176000000,578001],[1606262400000,645790],[1606348800000,627061],[1606435200000,611723],[1606521600000,604325],[1606608000000,531111],[1606694400000,489953],[1606780800000,594343],[1606867200000,649134],[1606953600000,696567],[1607040000000,697529],[1607126400000,655732],[1607212800000,555634],[1607299200000,518353],[1607385600000,617490],[1607472000000,665363],[1607558400000,705246],[1607644800000,716248],[1607731200000,667203],[1607817600000,558513],[1607904000000,528893],[1607990400000,612849],[1608076800000,728962],[1608163200000,740539],[1608249600000,724145],[1608336000000,650852],[1608422400000,571164],[1608508800000,536294],[1608595200000,628872],[1608681600000,701153],[1608768000000,700731],[1608854400000,548994],[1608940800000,473628],[1609027200000,452760],[1609113600000,499188],[1609200000000,648472],[1609286400000,743397],[1609372800000,766888],[1609459200000,652677],[1609545600000,576908],[1609632000000,546905],[1609718400000,562307],[1609804800000,725352],[1609891200000,814258],[1609977600000,847431],[1610064000000,850219],[1610150400000,776162],[1610236800000,652514],[1610323200000,590538],[1610409600000,690792],[1610496000000,749797],[1610582400000,756192],[1610668800000,767911],[1610755200000,683808],[1610841600000,564062],[1610928000000,481086],[1611014400000,597043],[1611100800000,666437],[1611187200000,655377],[1611273600000,644592],[1611360000000,606047],[1611446400000,488480],[1611532800000,439349],[1611619200000,536049],[1611705600000,591710],[1611792000000,601795],[1611878400000,586853],[1611964800000,533801],[1612051200000,421163],[1612137600000,391972],[1612224000000,457554],[1612310400000,487533],[1612396800000,510097],[1612483200000,498393],[1612569600000,444181],[1612656000000,366274],[1612742400000,320373],[1612828800000,390754],[1612915200000,443589],[1613001600000,445879],[1613088000000,429518],[1613174400000,388884],[1613260800000,306382],[1613347200000,264381],[1613433600000,346396],[1613520000000,397925],[1613606400000,403307],[1613692800000,413850],[1613779200000,389079],[1613865600000,319827],[1613952000000,286188],[1614038400000,379606],[1614124800000,445216],[1614211200000,449754],[1614297600000,437651],[1614384000000,398917],[1614470400000,323402],[1614556800000,295113],[1614643200000,372492],[1614729600000,447119],[1614816000000,451123],[1614902400000,454848],[1614988800000,415409],[1615075200000,380878],[1615161600000,292783],[1615248000000,394828],[1615334400000,469516],[1615420800000,482900],[1615507200000,495307],[1615593600000,454726],[1615680000000,379086],[1615766400000,336963],[1615852800000,456714],[1615939200000,535541],[1616025600000,553160],[1616112000000,558999],[1616198400000,520107],[1616284800000,438811],[1616371200000,424689],[1616457600000,505695],[1616544000000,591512],[1616630400000,635206],[1616716800000,634845],[1616803200000,596446],[1616889600000,504915],[1616976000000,457063],[1617062400000,549933],[1617148800000,647119],[1617235200000,707136],[1617321600000,653135],[1617408000000,568950],[1617494400000,554295],[1617580800000,480685],[1617667200000,633147],[1617753600000,690380],[1617840000000,747280],[1617926400000,792239],[1618012800000,724073],[1618099200000,655929],[1618185600000,583631],[1618272000000,744566],[1618358400000,813558],[1618444800000,843811],[1618531200000,837853],[1618617600000,806529],[1618704000000,733079],[1618790400000,656496],[1618876800000,830621],[1618963200000,888343],[1619049600000,890172],[1619136000000,901702],[1619222400000,847127],[1619308800000,748195],[1619395200000,671436],[1619481600000,837786],[1619568000000,892733],[1619654400000,903834],[1619740800000,877223],[1619827200000,819117],[1619913600000,699263],[1620000000000,669298],[1620086400000,785510],[1620172800000,850106],[1620259200000,860999],[1620345600000,842167],[1620432000000,798462],[1620518400000,668378],[1620604800000,607840],[1620691200000,717357],[1620777600000,757113],[1620864000000,748050],[1620950400000,700322],[1621036800000,649226],[1621123200000,551792],[1621209600000,535933],[1621296000000,618196],[1621382400000,664866],[1621468800000,657386],[1621555200000,625367],[1621641600000,586141],[1621728000000,490620],[1621814400000,444736],[1621900800000,526145],[1621987200000,563403],[1622073600000,538405],[1622160000000,511256],[1622246400000,502625],[1622332800000,416421],[1622419200000,367865],[1622505600000,450828],[1622592000000,492953],[1622678400000,477374],[1622764800000,422325],[1622851200000,411970],[1622937600000,340403],[1623024000000,315429],[1623110400000,365161],[1623196800000,424551],[1623283200000,439052],[1623369600000,417224],[1623456000000,383131],[1623542400000,311117],[1623628800000,303872],[1623715200000,374153],[1623801600000,402597],[1623888000000,391905],[1623974400000,406350],[1624060800000,369556],[1624147200000,305919],[1624233600000,281805],[1624320000000,379061],[1624406400000,436219],[1624492800000,407673],[1624579200000,414552],[1624665600000,383222],[1624752000000,324153],[1624838400000,320224],[1624924800000,385503],[1625011200000,400231],[1625097600000,435928],[1625184000000,442707],[1625270400000,402327],[1625356800000,355425],[1625443200000,349889],[1625529600000,437578],[1625616000000,466558],[1625702400000,491219],[1625788800000,499379],[1625875200000,451760],[1625961600000,403878],[1626048000000,404199],[1626134400000,518326],[1626220800000,561182],[1626307200000,570681],[1626393600000,571099],[1626480000000,529922],[1626566400000,498054],[1626652800000,438035],[1626739200000,524635],[1626825600000,569665],[1626912000000,576106],[1626998400000,587437],[1627084800000,549100],[1627171200000,497943],[1627257600000,468029],[1627344000000,608903],[1627430400000,669857],[1627516800000,678738],[1627603200000,657422],[1627689600000,599711],[1627776000000,550179],[1627862400000,504576],[1627948800000,630072],[1628035200000,700161],[1628121600000,718950],[1628208000000,712019],[1628294400000,645534],[1628380800000,573372],[1628467200000,527030],[1628553600000,662786],[1628640000000,710595],[1628726400000,727399],[1628812800000,738997],[1628899200000,652625],[1628985600000,568231],[1629072000000,534953],[1629158400000,677737],[1629244800000,712011],[1629331200000,750440],[1629417600000,728168],[1629504000000,643670],[1629590400000,568573],[1629676800000,529788],[1629763200000,683478],[1629849600000,742092],[1629936000000,741013],[1630022400000,731301],[1630108800000,646776],[1630195200000,565624],[1630281600000,539052],[1630368000000,643523],[1630454400000,690825],[1630540800000,698598],[1630627200000,684604],[1630713600000,590373],[1630800000000,544573],[1630886400000,502551],[1630972800000,544391],[1631059200000,616858],[1631145600000,633425],[1631232000000,614245],[1631318400000,557842],[1631404800000,490916],[1631491200000,451728],[1631577600000,528473],[1631664000000,579772],[1631750400000,589399],[1631836800000,580388],[1631923200000,499539],[1632009600000,430862],[1632096000000,414801],[1632182400000,488432],[1632268800000,537423],[1632355200000,528358],[1632441600000,516587],[1632528000000,446468],[1632614400000,401323],[1632700800000,385481],[1632787200000,441743],[1632873600000,496196],[1632960000000,504673],[1633046400000,484551],[1633132800000,414253],[1633219200000,360200],[1633305600000,349933],[1633392000000,425950],[1633478400000,462133],[1633564800000,474175],[1633651200000,456849],[1633737600000,400322],[1633824000000,355848],[1633910400000,335158],[1633996800000,405294],[1634083200000,449862],[1634169600000,457201],[1634256000000,444739],[1634342400000,395858],[1634428800000,350328],[1634515200000,355365],[1634601600000,425781],[1634688000000,462013],[1634774400000,475723],[1634860800000,466366],[1634947200000,422419],[1635033600000,365124],[1635120000000,343534],[1635206400000,443096],[1635292800000,484431],[1635379200000,493142],[1635465600000,478959],[1635552000000,432992],[1635638400000,374443],[1635724800000,373503],[1635811200000,410231],[1635897600000,492098],[1635984000000,529933],[1636070400000,515551],[1636156800000,466545],[1636243200000,394886],[1636329600000,390927],[1636416000000,483739],[1636502400000,556183],[1636588800000,566925],[1636675200000,542793],[1636761600000,493413],[1636848000000,418679],[1636934400000,433640],[1637020800000,521243],[1637107200000,602915],[1637193600000,628688],[1637280000000,606704],[1637366400000,559631],[1637452800000,462954],[1637539200000,475364],[1637625600000,592828],[1637712000000,644481],[1637798400000,641331],[1637884800000,623431],[1637971200000,545054],[1638057600000,465824],[1638144000000,483117],[1638230400000,618438],[1638316800000,690465],[1638403200000,722639],[1638489600000,719460],[1638576000000,620740],[1638662400000,513307],[1638748800000,496473],[1638835200000,636767],[1638921600000,695428],[1639008000000,694309],[1639094400000,689008],[1639180800000,605512],[1639267200000,526053],[1639353600000,486211],[1639440000000,649544],[1639526400000,736420],[1639612800000,753467],[1639699200000,755803],[1639785600000,683370],[1639872000000,589912],[1639958400000,583956],[1640044800000,783210],[1640131200000,931641],[1640217600000,1028039],[1640304000000,1021786],[1640390400000,928635],[1640476800000,698798],[1640563200000,825428],[1640649600000,1327201],[1640736000000,1670104],[1640822400000,1960399],[1640908800000,1962996],[1640995200000,1857812],[1641081600000,1308863],[1641168000000,1486806],[1641254400000,2247778],[1641340800000,2647785],[1641427200000,2766145],[1641513600000,2829922],[1641600000000,2741593],[1641686400000,2489571],[1641772800000,2250990],[1641859200000,2969124],[1641945600000,3315045],[1642032000000,3377233],[1642118400000,3365533],[1642204800000,2987927],[1642291200000,2673286],[1642377600000,2438666],[1642464000000,3287291],[1642550400000,3694305],[1642636800000,3804223],[1642723200000,3796800],[1642809600000,3463295],[1642896000000,2860117],[1642982400000,2512436],[1643068800000,3548061],[1643155200000,3680344],[1643241600000,3680993],[1643328000000,3560570],[1643414400000,3057447],[1643500800000,2531019],[1643587200000,2336985],[1643673600000,3136293],[1643760000000,3149887],[1643846400000,3193826],[1643932800000,3030348],[1644019200000,2453767],[1644105600000,2081940],[1644192000000,1891187],[1644278400000,2681613],[1644364800000,2647828],[1644451200000,2555501],[1644537600000,2374208],[1644624000000,2019312],[1644710400000,1626161]],
  DailyCases7DaysAvg: [[1579651200000,0],[1579737600000,0],[1579824000000,0],[1579910400000,0],[1579996800000,0],[1580083200000,0],[1580169600000,0],[1580256000000,0],[1580342400000,1286],[1580428800000,1524],[1580515200000,1799],[1580601600000,2095],[1580688000000,2305],[1580774400000,2654],[1580860800000,2935],[1580947200000,3101],[1581033600000,3290],[1581120000000,3298],[1581206400000,3319],[1581292800000,3222],[1581379200000,2954],[1581465600000,4448],[1581552000000,4731],[1581638400000,4622],[1581724800000,4542],[1581811200000,4422],[1581897600000,4345],[1581984000000,4320],[1582070400000,2370],[1582156800000,1778],[1582243200000,1547],[1582329600000,1391],[1582416000000,1171],[1582502400000,1024],[1582588800000,878],[1582675200000,964],[1582761600000,1025],[1582848000000,1133],[1582934400000,1300],[1583020800000,1588],[1583107200000,1818],[1583193600000,2169],[1583280000000,2458],[1583366400000,2868],[1583452800000,3330],[1583539200000,3836],[1583625600000,4296],[1583712000000,4954],[1583798400000,5735],[1583884800000,6895],[1583971200000,8291],[1584057600000,9951],[1584144000000,11619],[1584230400000,13476],[1584316800000,15414],[1584403200000,17583],[1584489600000,19988],[1584576000000,22565],[1584662400000,25685],[1584748800000,28044],[1584835200000,30658],[1584921600000,33973],[1585008000000,37152],[1585094400000,40300],[1585180800000,44619],[1585267200000,48745],[1585353600000,53588],[1585440000000,57024],[1585526400000,59921],[1585612800000,64280],[1585699200000,68334],[1585785600000,70736],[1585872000000,73519],[1585958400000,75550],[1586044800000,77484],[1586131200000,79205],[1586217600000,80161],[1586304000000,81649],[1586390400000,83213],[1586476800000,84823],[1586563200000,85409],[1586649600000,85731],[1586736000000,85802],[1586822400000,85393],[1586908800000,85237],[1586995200000,84950],[1587081600000,83952],[1587168000000,83845],[1587254400000,84192],[1587340800000,85124],[1587427200000,85389],[1587513600000,84947],[1587600000000,85103],[1587686400000,85970],[1587772800000,86909],[1587859200000,86422],[1587945600000,84774],[1588032000000,84338],[1588118400000,84964],[1588204800000,84984],[1588291200000,84712],[1588377600000,83449],[1588464000000,84429],[1588550400000,85813],[1588636800000,86539],[1588723200000,87724],[1588809600000,88874],[1588896000000,89163],[1588982400000,90030],[1589068800000,89741],[1589155200000,88664],[1589241600000,89402],[1589328000000,88734],[1589414400000,88890],[1589500800000,89705],[1589587200000,90907],[1589673600000,91459],[1589760000000,94094],[1589846400000,95521],[1589932800000,97428],[1590019200000,98993],[1590105600000,100044],[1590192000000,100873],[1590278400000,102894],[1590364800000,102891],[1590451200000,102305],[1590537600000,102876],[1590624000000,104459],[1590710400000,107210],[1590796800000,110643],[1590883200000,112470],[1590969600000,114108],[1591056000000,117694],[1591142400000,119685],[1591228800000,121635],[1591315200000,122241],[1591401600000,122844],[1591488000000,123647],[1591574400000,124591],[1591660800000,125255],[1591747200000,127575],[1591833600000,128694],[1591920000000,130310],[1592006400000,131252],[1592092800000,132618],[1592179200000,135275],[1592265600000,138690],[1592352000000,140263],[1592438400000,140847],[1592524800000,146760],[1592611200000,150256],[1592697600000,151400],[1592784000000,153462],[1592870400000,156333],[1592956800000,160443],[1593043200000,166216],[1593129600000,168083],[1593216000000,171164],[1593302400000,175977],[1593388800000,178813],[1593475200000,180886],[1593561600000,184297],[1593648000000,188568],[1593734400000,191420],[1593820800000,193763],[1593907200000,195453],[1593993600000,197408],[1594080000000,202081],[1594166400000,204509],[1594252800000,206608],[1594339200000,209934],[1594425600000,213111],[1594512000000,216255],[1594598400000,219094],[1594684800000,220763],[1594771200000,223759],[1594857600000,227085],[1594944000000,227519],[1595030400000,228907],[1595116800000,231919],[1595203200000,233186],[1595289600000,235869],[1595376000000,242225],[1595462400000,245996],[1595548800000,252870],[1595635200000,257965],[1595721600000,258135],[1595808000000,259972],[1595894400000,261329],[1595980800000,262772],[1596067200000,264308],[1596153600000,264563],[1596240000000,264049],[1596326400000,264150],[1596412800000,261841],[1596499200000,262442],[1596585600000,259855],[1596672000000,259345],[1596758400000,258246],[1596844800000,259903],[1596931200000,260188],[1597017600000,262744],[1597104000000,264761],[1597190400000,267122],[1597276800000,267615],[1597363200000,268564],[1597449600000,267794],[1597536000000,267005],[1597622400000,264822],[1597708800000,263500],[1597795200000,261498],[1597881600000,259467],[1597968000000,255857],[1598054400000,256137],[1598140800000,255538],[1598227200000,257625],[1598313600000,257265],[1598400000000,257535],[1598486400000,258295],[1598572800000,261913],[1598659200000,261473],[1598745600000,263373],[1598832000000,267802],[1598918400000,268619],[1599004800000,270153],[1599091200000,271855],[1599177600000,274366],[1599264000000,276144],[1599350400000,278046],[1599436800000,271809],[1599523200000,269529],[1599609600000,269780],[1599696000000,271666],[1599782400000,273403],[1599868800000,275426],[1599955200000,277340],[1600041600000,283632],[1600128000000,288958],[1600214400000,291467],[1600300800000,293114],[1600387200000,293765],[1600473600000,294985],[1600560000000,295309],[1600646400000,293631],[1600732800000,293383],[1600819200000,294160],[1600905600000,294394],[1600992000000,294618],[1601078400000,294946],[1601164800000,295413],[1601251200000,295390],[1601337600000,296524],[1601424000000,297235],[1601510400000,298223],[1601596800000,298647],[1601683200000,298409],[1601769600000,298173],[1601856000000,303058],[1601942400000,306231],[1602028800000,310611],[1602115200000,315666],[1602201600000,320341],[1602288000000,330917],[1602374400000,335901],[1602460800000,336333],[1602547200000,337441],[1602633600000,342474],[1602720000000,348611],[1602806400000,356418],[1602892800000,359927],[1602979200000,367680],[1603065600000,376635],[1603152000000,386923],[1603238400000,395547],[1603324800000,407225],[1603411200000,418118],[1603497600000,429960],[1603584000000,442229],[1603670400000,451277],[1603756800000,462221],[1603843200000,472456],[1603929600000,481595],[1604016000000,492993],[1604102400000,496865],[1604188800000,502451],[1604275200000,509986],[1604361600000,514528],[1604448000000,522543],[1604534400000,533409],[1604620800000,541033],[1604707200000,559394],[1604793600000,564214],[1604880000000,566805],[1604966400000,576392],[1605052800000,583992],[1605139200000,587842],[1605225600000,592750],[1605312000000,588958],[1605398400000,590978],[1605484800000,593875],[1605571200000,594765],[1605657600000,593851],[1605744000000,595604],[1605830400000,596549],[1605916800000,597097],[1606003200000,598014],[1606089600000,602883],[1606176000000,602605],[1606262400000,605703],[1606348800000,599995],[1606435200000,591455],[1606521600000,589218],[1606608000000,589382],[1606694400000,583995],[1606780800000,586329],[1606867200000,586807],[1606953600000,596737],[1607040000000,608994],[1607126400000,616339],[1607212800000,619842],[1607299200000,623898],[1607385600000,627206],[1607472000000,629524],[1607558400000,630764],[1607644800000,633438],[1607731200000,635077],[1607817600000,635488],[1607904000000,636993],[1607990400000,636331],[1608076800000,645416],[1608163200000,650458],[1608249600000,651587],[1608336000000,649250],[1608422400000,651058],[1608508800000,652115],[1608595200000,654404],[1608681600000,650431],[1608768000000,644745],[1608854400000,619722],[1608940800000,594406],[1609027200000,577490],[1609113600000,572189],[1609200000000,574990],[1609286400000,581024],[1609372800000,590475],[1609459200000,605287],[1609545600000,620042],[1609632000000,633491],[1609718400000,642507],[1609804800000,653491],[1609891200000,663613],[1609977600000,675120],[1610064000000,703340],[1610150400000,731805],[1610236800000,746892],[1610323200000,750925],[1610409600000,745987],[1610496000000,736779],[1610582400000,723745],[1610668800000,711987],[1610755200000,698793],[1610841600000,686157],[1610928000000,670521],[1611014400000,657129],[1611100800000,645220],[1611187200000,630817],[1611273600000,613201],[1611360000000,602092],[1611446400000,591295],[1611532800000,585332],[1611619200000,576618],[1611705600000,565944],[1611792000000,558289],[1611878400000,550040],[1611964800000,539720],[1612051200000,530103],[1612137600000,523334],[1612224000000,512121],[1612310400000,497239],[1612396800000,484139],[1612483200000,471502],[1612569600000,458699],[1612656000000,450858],[1612742400000,440629],[1612828800000,431086],[1612915200000,424809],[1613001600000,415635],[1613088000000,405795],[1613174400000,397896],[1613260800000,389340],[1613347200000,381341],[1613433600000,375004],[1613520000000,368481],[1613606400000,362399],[1613692800000,360161],[1613779200000,360188],[1613865600000,362109],[1613952000000,365225],[1614038400000,369969],[1614124800000,376725],[1614211200000,383360],[1614297600000,386760],[1614384000000,388165],[1614470400000,388677],[1614556800000,389951],[1614643200000,388935],[1614729600000,389207],[1614816000000,389402],[1614902400000,391859],[1614988800000,394215],[1615075200000,402426],[1615161600000,402094],[1615248000000,405284],[1615334400000,408483],[1615420800000,413023],[1615507200000,418803],[1615593600000,424420],[1615680000000,424164],[1615766400000,430475],[1615852800000,439316],[1615939200000,448748],[1616025600000,458785],[1616112000000,467884],[1616198400000,477225],[1616284800000,485756],[1616371200000,498289],[1616457600000,505286],[1616544000000,513282],[1616630400000,525002],[1616716800000,535838],[1616803200000,546744],[1616889600000,556187],[1616976000000,560811],[1617062400000,567132],[1617148800000,575075],[1617235200000,585351],[1617321600000,587964],[1617408000000,584036],[1617494400000,591090],[1617580800000,594465],[1617667200000,606352],[1617753600000,612533],[1617840000000,618267],[1617926400000,638139],[1618012800000,660300],[1618099200000,674819],[1618185600000,689526],[1618272000000,705442],[1618358400000,723040],[1618444800000,736829],[1618531200000,743346],[1618617600000,755126],[1618704000000,766146],[1618790400000,776556],[1618876800000,788850],[1618963200000,799533],[1619049600000,806156],[1619136000000,815278],[1619222400000,821077],[1619308800000,823236],[1619395200000,825371],[1619481600000,826395],[1619568000000,827021],[1619654400000,828973],[1619740800000,825477],[1619827200000,821475],[1619913600000,814484],[1620000000000,814179],[1620086400000,806711],[1620172800000,800622],[1620259200000,794502],[1620345600000,789495],[1620432000000,786543],[1620518400000,782132],[1620604800000,773351],[1620691200000,763616],[1620777600000,750331],[1620864000000,734195],[1620950400000,713932],[1621036800000,692612],[1621123200000,675957],[1621209600000,665685],[1621296000000,651519],[1621382400000,638340],[1621468800000,625389],[1621555200000,614681],[1621641600000,605669],[1621728000000,596930],[1621814400000,583901],[1621900800000,570752],[1621987200000,556257],[1622073600000,539259],[1622160000000,522958],[1622246400000,511027],[1622332800000,500428],[1622419200000,489445],[1622505600000,478687],[1622592000000,468621],[1622678400000,459904],[1622764800000,447198],[1622851200000,434248],[1622937600000,423389],[1623024000000,415897],[1623110400000,403659],[1623196800000,393888],[1623283200000,388413],[1623369600000,387684],[1623456000000,383565],[1623542400000,379380],[1623628800000,377730],[1623715200000,379014],[1623801600000,375878],[1623888000000,369143],[1623974400000,367589],[1624060800000,365650],[1624147200000,364908],[1624233600000,361755],[1624320000000,362456],[1624406400000,367259],[1624492800000,369512],[1624579200000,370684],[1624665600000,372635],[1624752000000,375241],[1624838400000,380729],[1624924800000,381650],[1625011200000,376508],[1625097600000,380545],[1625184000000,384567],[1625270400000,387296],[1625356800000,391763],[1625443200000,396002],[1625529600000,403440],[1625616000000,412916],[1625702400000,420815],[1625788800000,428911],[1625875200000,435972],[1625961600000,442895],[1626048000000,450653],[1626134400000,462188],[1626220800000,475706],[1626307200000,487058],[1626393600000,497304],[1626480000000,508469],[1626566400000,521924],[1626652800000,526757],[1626739200000,527658],[1626825600000,528870],[1626912000000,529645],[1626998400000,531979],[1627084800000,534719],[1627171200000,534703],[1627257600000,538988],[1627344000000,551026],[1627430400000,565340],[1627516800000,580001],[1627603200000,589998],[1627689600000,597229],[1627776000000,604692],[1627862400000,609912],[1627948800000,612936],[1628035200000,617266],[1628121600000,623010],[1628208000000,630810],[1628294400000,637356],[1628380800000,640669],[1628467200000,643877],[1628553600000,648550],[1628640000000,650041],[1628726400000,651248],[1628812800000,655102],[1628899200000,656114],[1628985600000,655381],[1629072000000,656512],[1629158400000,658648],[1629244800000,658851],[1629331200000,662142],[1629417600000,660595],[1629504000000,659315],[1629590400000,659365],[1629676800000,658627],[1629763200000,659447],[1629849600000,663744],[1629936000000,662397],[1630022400000,662845],[1630108800000,663289],[1630195200000,662867],[1630281600000,664191],[1630368000000,658483],[1630454400000,651159],[1630540800000,645100],[1630627200000,638429],[1630713600000,630371],[1630800000000,627364],[1630886400000,622150],[1630972800000,607988],[1631059200000,597421],[1631145600000,588111],[1631232000000,578059],[1631318400000,573412],[1631404800000,565747],[1631491200000,558486],[1631577600000,556213],[1631664000000,550914],[1631750400000,544625],[1631836800000,539789],[1631923200000,531459],[1632009600000,522880],[1632096000000,517605],[1632182400000,511885],[1632268800000,505834],[1632355200000,497115],[1632441600000,488000],[1632528000000,480419],[1632614400000,476199],[1632700800000,472010],[1632787200000,465341],[1632873600000,459451],[1632960000000,456067],[1633046400000,451491],[1633132800000,446888],[1633219200000,441014],[1633305600000,435936],[1633392000000,433679],[1633478400000,428813],[1633564800000,424457],[1633651200000,420499],[1633737600000,418509],[1633824000000,417887],[1633910400000,415776],[1633996800000,412826],[1634083200000,411072],[1634169600000,408648],[1634256000000,406918],[1634342400000,406280],[1634428800000,405491],[1634515200000,408378],[1634601600000,411305],[1634688000000,413041],[1634774400000,415687],[1634860800000,418776],[1634947200000,422571],[1635033600000,424684],[1635120000000,422994],[1635206400000,425468],[1635292800000,428671],[1635379200000,431158],[1635465600000,432958],[1635552000000,434469],[1635638400000,435799],[1635724800000,440081],[1635811200000,435386],[1635897600000,436481],[1635984000000,441737],[1636070400000,446964],[1636156800000,451758],[1636243200000,454678],[1636329600000,457168],[1636416000000,467668],[1636502400000,476823],[1636588800000,482108],[1636675200000,486000],[1636761600000,489838],[1636848000000,493237],[1636934400000,499339],[1637020800000,504697],[1637107200000,511372],[1637193600000,520196],[1637280000000,529326],[1637366400000,538786],[1637452800000,545110],[1637539200000,551072],[1637625600000,561297],[1637712000000,567236],[1637798400000,569042],[1637884800000,571431],[1637971200000,569349],[1638057600000,569759],[1638144000000,570867],[1638230400000,574525],[1638316800000,581094],[1638403200000,592710],[1638489600000,606428],[1638576000000,617241],[1638662400000,624023],[1638748800000,625932],[1638835200000,628550],[1638921600000,629259],[1639008000000,625212],[1639094400000,620862],[1639180800000,618686],[1639267200000,620508],[1639353600000,619041],[1639440000000,620866],[1639526400000,626723],[1639612800000,635173],[1639699200000,644716],[1639785600000,655838],[1639872000000,664961],[1639958400000,678925],[1640044800000,698019],[1640131200000,725909],[1640217600000,765133],[1640304000000,803130],[1640390400000,838169],[1640476800000,853723],[1640563200000,888220],[1640649600000,965933],[1640736000000,1071427],[1640822400000,1204621],[1640908800000,1339081],[1640995200000,1471819],[1641081600000,1558972],[1641168000000,1653455],[1641254400000,1784965],[1641340800000,1924634],[1641427200000,2039741],[1641513600000,2163587],[1641600000000,2289842],[1641686400000,2458514],[1641772800000,2567684],[1641859200000,2670732],[1641945600000,2766056],[1642032000000,2853354],[1642118400000,2929870],[1642204800000,2965060],[1642291200000,2991306],[1642377600000,3018116],[1642464000000,3063569],[1642550400000,3117749],[1642636800000,3178747],[1642723200000,3240357],[1642809600000,3308266],[1642896000000,3334957],[1642982400000,3345495],[1643068800000,3382748],[1643155200000,3380754],[1643241600000,3363150],[1643328000000,3329402],[1643414400000,3271424],[1643500800000,3224410],[1643587200000,3199345],[1643673600000,3140522],[1643760000000,3064742],[1643846400000,2995147],[1643932800000,2919400],[1644019200000,2833161],[1644105600000,2769007],[1644192000000,2705321],[1644278400000,2640367],[1644364800000,2568644],[1644451200000,2477455],[1644537600000,2383720],[1644624000000,2321656],[1644710400000,2256544]],
};