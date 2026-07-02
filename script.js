const rows = [
  ['home','الصفحة الرئيسية','أهلاً ومرحباً بكم طالباتي العزيزات في واحة الفيزياء. هذه النسخة تجمع دروس معالجة الفاقد التعليمي في تطبيق واحد دون الحاجة إلى الخروج من الموقع.',[['واحة','تعلم تفاعلي'],['10','الصف العاشر'],['14','محطة تعلم']],['التنقل بين دروس الفيزياء الأساسية من مكان واحد.','اختيار طريقة التعلم المناسبة: أهداف، شرح، وسائط، نشاط، وتقييم.','مراجعة المفاهيم السابقة قبل الانتقال إلى دروس الحركة والقوى.','استخدام مساعد فيزوقي الداخلي للحصول على تلميحات سريعة.'],'تم تحويل صفحات واحة الفيزياء إلى تجربة داخلية؛ تختارين الدرس من الشريط فتتغير الأهداف والمصادر والنشاط والتقييم دون فتح صفحة خارجية.',[['الكميات والوحدات','SI units','اشتقاق الوحدات والتمييز بين الكميات.'],['الحركة','x, v, a','الإزاحة والمسافة والتسارع ومنحنيات الحركة.'],['القوى','F = ma','أشكال القوى والقوة المركزية وقانون نيوتن الثالث.']],[],['ما أفضل طريقة للبدء؟',[['اختيار درس من الشريط',1],['فتح Google Sites',0],['تجاوز الأهداف',0]]],[['كيف أبدأ؟','اختاري درساً من شريط الدروس، ثم اقرئي أهدافه قبل مشاهدة المصدر المدمج.'],['هل أحتاج للخروج؟','لا. التنقل والمراجعة والنشاطات الأساسية تعمل داخل هذه الصفحة.']]],
  ['units','اشتقاق الوحدات','يوضح الدرس كيف تشتق وحدات الكميات الفيزيائية المشتقة من الوحدات الأساسية في النظام الدولي.',[['SI','النظام الدولي'],['kg,m,s','وحدات أساسية'],['تحقق','صحة الوحدة']],['تفسير كيفية اشتقاق وحدات الكميات الفيزيائية المشتقة.','اشتقاق وحدات كميات فيزيائية من الوحدات الأساسية.','تحليل خطوات اشتقاق الوحدات الفيزيائية المشتقة.','التحقق من صحة اشتقاق الوحدة الفيزيائية.'],'نبدأ من العلاقة الرياضية للكمية، ثم نعوض وحدات الكميات الأساسية ونبسطها حتى نحصل على وحدة مشتقة صحيحة.',[['السرعة','m / s','المسافة مقسومة على الزمن.'],['التسارع','m / s²','تغير السرعة مقسوماً على الزمن.'],['القوة','kg.m / s²','الكتلة مضروبة في التسارع.']],[['عرض تقديمي','اشتقاق الوحدات','13_-8O9sUdGUTXP4c6SJzebYSkdoP3jW1']],['وحدة التسارع هي:',[['m/s²',1],['kg.m/s²',0],['m.s',0]]],[['كيف أشتق وحدة؟','اكتبي القانون، عوضي الوحدات الأساسية، ثم بسطي الرموز خطوة خطوة.']]],
  ['vector-properties','خصائص المتجهات','يوضح الدرس تكافؤ المتجهات، ومعنى تغير مقدار المتجه عند ضربه في عدد، والعلاقة بين المتجه ومعكوسه.',[['مقدار','طول المتجه'],['اتجاه','زاوية المتجه'],['-A','معكوس المتجه']],['تعرف مفهوم تكافؤ المتجهات.','تفسير تغير مقدار المتجه عند ضربه في عدد أقل أو أكبر من 1.','تحليل العلاقة بين المتجه ومعكوسه من حيث المقدار والاتجاه.'],'المتجه كمية لها مقدار واتجاه. ويتكافأ المتجهان عندما يتساويان في المقدار والاتجاه ولو اختلف موضعهما.',[['المتجه','A','كمية لها مقدار واتجاه.'],['المتجه المكافئ','A = B','المقدار والاتجاه متساويان.'],['المعكوس','-A','نفس المقدار واتجاه معاكس.']],[['عرض/وسيط','خصائص المتجهات','1Kvmg_UY7HpqLsCFbkLBw1acC-ndoZq8w'],['فيديو','آليات المتجهات','1IvQIcijqnT19vOJBqLN1yj3gWpC03oIO']],['متى يكون المتجهان متكافئين؟',[['لهما المقدار والاتجاه نفسيهما',1],['لهما اللون نفسه',0],['لهما نقطة بداية واحدة فقط',0]]],[['ما معنى تكافؤ؟','يعني أن المتجهين متساويان في المقدار والاتجاه حتى لو رسما في مكانين مختلفين.']]],
  ['vector-addition','جمع المتجهات','يجمع الدرس بين المتجهات المتوازية والمتعاكسة والمتعامدة، ويحسب المحصلة واتجاهها.',[['R','المحصلة'],['θ','الاتجاه'],['⊥','متعامدان']],['شرح آلية جمع المتجهات المتوازية والمتعاكسة والمتعامدة.','حساب محصلة متجهين في الاتجاه نفسه.','حساب محصلة متجهين متعاكسين.','حساب محصلة متجهين متعامدين وتحديد اتجاهها.'],'طريقة الجمع تعتمد على علاقة الاتجاهات: في الاتجاه نفسه نجمع، وفي الاتجاهين المتعاكسين نطرح، وعند التعامد نستخدم فيثاغورس والظل.',[['نفس الاتجاه','R = A + B','المقداران يجمعان مباشرة.'],['اتجاهان متعاكسان','R = |A - B|','المحصلة ناحية المتجه الأكبر.'],['متعامدان','R = √(A² + B²)','ثم tan θ = B/A.']],[['فيديو','الجمع الحسابي للمتجهات','1ngNpFXwW5FcEY5OobYe46IrFKSWE5pen'],['عرض','جمع المتجهات','1vapqKVI5XCXpkRGsUxub1vN0S_vPKhK0']],['متجهان 3 N و4 N متعامدان. المحصلة:',[['5 N',1],['7 N',0],['1 N',0]]],[['كيف أختار طريقة الجمع؟','اسألي أولاً: هل المتجهان في الاتجاه نفسه، متعاكسان، أم متعامدان؟ ثم اختاري القانون المناسب.']]],
  ['scalar-vector','التمييز بين الكميات القياسية والمتجهة','يميز الدرس بين الكميات التي تحتاج مقداراً فقط والكميات التي تحتاج مقداراً واتجاهاً.',[['قياسية','مقدار فقط'],['متجهة','مقدار واتجاه'],['SI','وحدات أساسية']],['ذكر الوحدات الأساسية في النظام الدولي.','التمييز بين الكميات القياسية والمتجهة من خلال تعريفها.','تصنيف الكميات الفيزيائية إلى قياسية ومتجهة.','إنشاء مخطط يصنف الكميات الفيزيائية مع أمثلة.'],'الكتلة والزمن كميات قياسية، أما الإزاحة والسرعة والقوة فهي متجهة لأنها تحتاج إلى اتجاه بجانب المقدار.',[['الزمن','scalar','لا يحتاج اتجاهاً.'],['الإزاحة','vector','تحتاج اتجاه الحركة.'],['القوة','vector','اتجاه القوة يحدد أثرها.']],[['فيديو','الكميات الفيزيائية والاتجاه','18bNO4vdPwtKAelH9YUge7XsGLIOIW4R6'],['عرض','الكميات القياسية والمتجهة','1yeMI5j8vvVjnd6kTm8FuDQAQ41K-e2cc']],['أي كمية تعد متجهة؟',[['القوة',1],['الزمن',0],['درجة الحرارة',0]]],[['كيف أميز؟','إذا احتاجت الكمية إلى اتجاه كي يكتمل معناها فهي متجهة، وإلا فهي قياسية.']]],
  ['distance-displacement','التمييز بين الإزاحة والمسافة','يفرق الدرس بين طول المسار الفعلي والتغير من نقطة البداية إلى النهاية.',[['d','مسافة'],['Δx','إزاحة'],['اتجاه','مهم للإزاحة']],['توضيح الفرق بين الإزاحة والمسافة.','تطبيق المفهومين في مواقف حياتية.','الحكم على ملاءمة استخدام الإزاحة أو المسافة في وصف موقف.','إنشاء مسائل حياتية توظف مفهومي الإزاحة والمسافة.'],'المسافة هي طول المسار الذي قطعه الجسم، أما الإزاحة فهي أقصر خط مستقيم من البداية إلى النهاية مع اتجاه محدد.',[['المسافة','path length','طول المسار الفعلي.'],['الإزاحة','final - initial','التغير في الموضع.'],['حركة كاملة','Δx = 0','إذا عاد الجسم لنقطة البداية.']],[['فيديو','المسافة مقابل الإزاحة','1HkgKFc3o8md-mM8jDVjWxYdQDAqfigS8'],['عرض','الإزاحة والمسافة','1L9UiKQQ0_0PDJgmjHP2rV8OXMiIgPpOK']],['شخص عاد إلى نقطة البداية. إزاحته:',[['صفر',1],['تساوي المسافة دائماً',0],['لا يمكن حسابها',0]]],[['لماذا الإزاحة صفر أحياناً؟','لأنها تعتمد على البداية والنهاية؛ إذا تطابقتا فالتغير في الموضع يساوي صفراً.']]],
  ['conversions','التحويلات','يجري الدرس التحويل بين أنظمة القياس ووحداتها ويقيم دقة عمليات التحويل.',[['×','عامل تحويل'],['SI','نظام القياس'],['دقة','تحقق']],['تعداد أنظمة القياس المستخدمة في الفيزياء.','توضيح مبدأ التحويل بين الأنظمة ووحدات القياس المختلفة.','إجراء التحويل بين الأنظمة ووحدات القياس المختلفة.','تقييم دقة عمليات التحويل بين الأنظمة والوحدات.'],'نستخدم عامل تحويل يساوي 1 من حيث القيمة الفيزيائية، لكنه يبدل الوحدة إلى وحدة أخرى مناسبة.',[['كيلومتر إلى متر','1 km = 1000 m','نضرب في 1000.'],['ساعة إلى ثانية','1 h = 3600 s','نضرب في 3600.'],['إلغاء الوحدات','unit factor','نرتب العامل بحيث تلغى الوحدة غير المطلوبة.']],[['عرض','التحويلات','1lTvj-Ojsifyy3_IHFTHRxEwYyqSlo_v-']],['لتحويل 2 km إلى m نستخدم:',[['2000 m',1],['20 m',0],['0.002 m',0]]],[['كيف أتأكد من التحويل؟','اسألي هل الوحدة الجديدة أكبر أم أصغر، ثم قارني العدد الناتج بمنطق الحالة.']]],
  ['constant-acceleration','الحركة بتسارع ثابت','يعالج الدرس الحركة عندما يكون التسارع ثابتاً، ويستخدم علاقات الحركة في حل المسائل.',[['a ثابت','تسارع منتظم'],['v','سرعة'],['x','موضع']],['تفسير معنى التسارع الثابت.','تطبيق معادلات الحركة بتسارع ثابت.','تحليل معطيات المسألة لاختيار العلاقة المناسبة.','حل مسائل تجمع بين الإزاحة والسرعة والزمن.'],'عندما يكون التسارع ثابتاً تتغير السرعة بمعدل منتظم، ويمكن وصف الحركة بعلاقات تربط السرعة والزمن والإزاحة.',[['السرعة','v = v0 + at','تربط السرعة بالزمن.'],['الإزاحة','Δx = v0t + 1/2at²','تستخدم عندما نعرف الزمن.'],['بدون الزمن','v² = v0² + 2aΔx','مفيدة عندما لا يظهر الزمن.']],[['عرض','الحركة بتسارع ثابت','1To1oU6cAqmCHcievGg2dY426ItEiKV0R'],['فيديو','الحركة بتسارع منتظم','1RxhZuOkjiDUeW3vMXbknqnI7MlLPMv_I']],['إذا كان التسارع ثابتاً فإن السرعة:',[['تتغير بمعدل منتظم',1],['تبقى صفراً دائماً',0],['لا علاقة لها بالزمن',0]]],[['أي معادلة أختار؟','حددي الكميات المعطاة والمطلوبة أولاً، ثم اختاري العلاقة التي تحتويها.']]],
  ['motion-graphs','وصف منحنيات الحركة','يفسر الدرس منحنيات الموضع والسرعة والتسارع وكيف نستخرج منها معلومات الحركة.',[['ميل','معلومة الحركة'],['x-t','موضع وزمن'],['v-t','سرعة وزمن']],['وصف منحنيات الحركة بدلالة الزمن.','استخراج السرعة من ميل منحنى الموضع والزمن.','استخراج التسارع من ميل منحنى السرعة والزمن.','تحليل المساحة تحت منحنى السرعة والزمن.'],'المنحنى ليس رسماً فقط؛ ميله ومساحته يعطيان معلومات فيزيائية عن الحركة.',[['ميل x-t','velocity','يمثل السرعة.'],['ميل v-t','acceleration','يمثل التسارع.'],['مساحة v-t','displacement','تمثل الإزاحة.']],[['عرض','وصف منحنيات الحركة','1mXqIAFbev9Es8qKXsw0qfyMdJWQY3j-S'],['فيديو','قراءة منحنيات الحركة','1KxzIIgsWZqnlz3BQZaxlasdotpI1Tl-8']],['ميل منحنى السرعة والزمن يمثل:',[['التسارع',1],['الكتلة',0],['القوة المركزية',0]]],[['كيف أقرأ الرسم؟','ابدئي باسم المحورين، ثم اسألي عن الميل أو المساحة حسب نوع المنحنى.']]],
  ['vertical-projectile','المقذوف الرأسي','رحلة تفاعلية لفهم حركة جسم يقذف إلى أعلى أو إلى أسفل على خط رأسي تحت تأثير الجاذبية الأرضية.',[['g','تسارع الجاذبية'],['v = 0','عند أعلى نقطة'],['1D','حركة رأسية']],['توضيح مفهوم المقذوف الرأسي.','تحليل حركة جسم يقذف رأسياً إلى أعلى أو إلى أسفل.','تحديد اتجاه التسارع في أثناء الحركة.','استخدام علاقات الحركة لحساب الزمن والارتفاع والسرعة.'],'بعد ترك الجسم لليد تكون القوة المؤثرة الرئيسة هي وزن الجسم، لذلك يكون التسارع ثابتاً وموجهاً نحو الأسفل.',[['القمة','v = 0','السرعة اللحظية عند أعلى نقطة.'],['التسارع','a = -g','إذا اعتبرنا الأعلى موجباً.'],['الارتفاع','y = y0 + v0t - 1/2gt²','يصف موضع الجسم رأسياً.']],[['عرض','المقذوف الرأسي','157y8I-OpT7XCjZgSyQY8pUKdEqXVWOR2'],['فيديو','حركة المقذوف الرأسي','1hb7zK-YdPK94D2OKe3yOV1l1AGJ9slw2']],['عند أعلى نقطة في المقذوف الرأسي تكون السرعة:',[['صفر لحظياً',1],['أكبر ما يمكن',0],['مساوية للجاذبية',0]]],[['لماذا لا يكون التسارع صفراً عند القمة؟','لأن الجاذبية ما زالت تؤثر في الجسم، أما السرعة فهي التي تصبح صفراً لحظة واحدة.']]],
  ['free-fall','السقوط الحر','يفسر الدرس حركة جسم يسقط تحت تأثير الجاذبية فقط مع إهمال مقاومة الهواء.',[['g','نحو الأسفل'],['v0 = 0','غالباً من السكون'],['هواء','يهمل في النموذج']],['تعريف السقوط الحر.','تحديد تسارع الجسم الساقط حراً.','تطبيق معادلات الحركة على السقوط الحر.','تمييز أثر مقاومة الهواء عن النموذج المثالي.'],'في السقوط الحر يكون التسارع نفسه لجميع الأجسام إذا أهملنا مقاومة الهواء، واتجاهه دائماً نحو الأسفل.',[['التسارع','g = 9.8 m/s²','نحو الأسفل قرب سطح الأرض.'],['من السكون','v = gt','إذا بدأ الجسم من السكون.'],['المسافة','y = 1/2gt²','عند السقوط من السكون.']],[['عرض','السقوط الحر','1cdYLv-96CPUKnSESV-nbFIbRGWoHdQ9O'],['فيديو','تجربة السقوط الحر','1Ec4QOddOt8BS51Rvu6X56WjbbwLBkrN-']],['في السقوط الحر المثالي نهمل:',[['مقاومة الهواء',1],['الجاذبية',0],['الزمن',0]]],[['هل تسقط الأجسام بالتسارع نفسه؟','في النموذج المثالي نعم، عندما نهمل مقاومة الهواء.']]],
  ['forces','أشكال القوى','يعرف الدرس أشكال القوى ويحلل تأثيرها واتجاهاتها في مواقف فيزيائية متنوعة.',[['F','قوة'],['W','وزن'],['ΣF','محصلة']],['تعرف أشكال القوى المختلفة.','تمييز القوى التلامسية وقوى المجال.','رسم مخطط القوى المؤثرة في جسم.','حساب محصلة القوى مع مراعاة الاتجاه.'],'القوة مؤثر يغير حالة حركة الجسم أو شكله، ولا بد من تحديد اتجاه كل قوة قبل جمعها أو تحليل أثرها.',[['الوزن','W = mg','قوة الجاذبية على الجسم.'],['محصلة القوى','ΣF','تجمع القوى مع اتجاهاتها.'],['قانون نيوتن الثاني','ΣF = ma','القوة المحصلة تسبب التسارع.']],[['عرض','أشكال القوى','1zvTbGjm44umxt8qaQGT_ZqgiSKCYolF3'],['فيديو','فيزياء القوة نظرية وتطبيق','1TNC9Z1NWnOatQwqYytrmYRm3s509_Ny8']],['قوة الوزن تساوي:',[['mg',1],['m/g',0],['g/m',0]]],[['كيف أحلل القوى؟','ارسمي الجسم وحددي كل قوة واتجاهها، ثم اجمعي القوى لإيجاد المحصلة.']]],
  ['centripetal-force','القوة المركزية','يفسر الدرس دور القوة المركزية في الحركة الدائرية ويحسبها في مسائل الحركة.',[['نحو المركز','اتجاه القوة'],['v²/r','تسارع مركزي'],['دائرية','مسار الحركة']],['تعريف القوة المركزية.','تفسير دور القوة المركزية في الحركة الدائرية.','حساب القوة المركزية في مسائل الحركة الدائرية.','تصميم نموذج يوضح دور القوة المركزية.'],'في الحركة الدائرية يتغير اتجاه السرعة باستمرار، ولذلك نحتاج إلى قوة محصلة نحو المركز تسبب هذا التغير.',[['التسارع المركزي','ac = v²/r','يعتمد على السرعة ونصف القطر.'],['القوة المركزية','Fc = mv²/r','ناتجة من الكتلة والتسارع المركزي.'],['الاتجاه','toward center','نحو المركز دائماً.']],[['عرض','القوة المركزية','15iEqg8_RLweXhFYSa4m7FG6ximFUiiqf'],['فيديو','فك لغز الحركة الدائرية','1KzWzgwMBb7hGPEUnPx2qDYZTHVbodd1C']],['اتجاه القوة المركزية:',[['نحو مركز الدائرة',1],['خارج الدائرة دائماً',0],['بلا اتجاه',0]]],[['هل القوة المركزية نوع مستقل؟','ليست دائماً نوعاً جديداً؛ قد تكون شد الحبل أو احتكاك الطريق أو الجاذبية حسب الحالة.']]],
  ['newton-third','قانون نيوتن الثالث','يوضح الدرس مفهوم الفعل ورد الفعل ويميز بين أزواج القوى والقوى المتزنة وغير المتزنة.',[['فعل','قوة أولى'],['رد فعل','قوة مساوية'],['جسمان','لا جسم واحد']],['ذكر نص قانون نيوتن الثالث.','شرح مفهوم الفعل ورد الفعل.','تحديد أزواج الفعل ورد الفعل في أمثلة متنوعة.','التمييز بين قوى الفعل ورد الفعل والقوى المتزنة وغير المتزنة.'],'قوتا الفعل ورد الفعل تظهران على جسمين مختلفين، لذلك لا تلغيان بعضهما على الجسم نفسه.',[['الفعل ورد الفعل','F_AB = -F_BA','قوتان متساويتان ومتعاكستان.'],['المقدار','|F_AB| = |F_BA|','المقدار نفسه.'],['الأجسام','A and B','كل قوة تؤثر في جسم مختلف.']],[['عرض','قانون نيوتن الثالث','1I93tm5rL8_Q8RbQ3cCN6wfaknkrBnGhl'],['فيديو','قانون نيوتن الثالث','1ivJWAUfmzwv30XNFNpqTFfZQhpnPHVZq']],['قوتا الفعل ورد الفعل تؤثران على:',[['جسمين مختلفين',1],['الجسم نفسه دائماً',0],['لا تؤثران',0]]],[['لماذا لا تلغي القوتان بعضهما؟','لأنهما تؤثران في جسمين مختلفين، أما الإلغاء فيحدث عند جمع قوى على الجسم نفسه.']]]
];

(function () {
  const doc = document;
  const root = doc.documentElement;
  const body = doc.body;
  const q = function (selector, scope) { return (scope || doc).querySelector(selector); };
  const qa = function (selector, scope) { return Array.from((scope || doc).querySelectorAll(selector)); };
  const lessons = rows.map(function (row) {
    return { id: row[0], title: row[1], summary: row[2], facts: row[3], goals: row[4], concept: row[5], equations: row[6], resources: row[7], activity: { prompt: row[8][0], options: row[8][1] }, assistant: row[9] || [] };
  });
  let currentIndex = Math.max(0, lessons.findIndex(function (lesson) { return lesson.id === 'vertical-projectile'; }));

  function make(tag, className, text) {
    const node = doc.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function empty(node) {
    if (!node) return;
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function setText(selector, value) {
    const node = q(selector);
    if (node) node.textContent = value;
  }

  function shortTitle(text) {
    return text.split(' ').slice(0, 4).join(' ');
  }

  function getQuiz(lesson) {
    return [
      [lesson.activity.prompt, lesson.activity.options],
      ['كيف تنتقلين بين الدروس داخل الموقع؟', [['باستخدام أزرار الموقع الداخلية', 1], ['بفتح Google Sites', 0], ['بتغيير اسم الملف يدوياً', 0]]]
    ];
  }

  function renderCards(container, items, className, build) {
    empty(container);
    if (!container) return;
    items.forEach(function (item, index) { container.appendChild(build(item, index)); });
  }

  function renderLesson(index, shouldScroll) {
    if (shouldScroll === undefined) shouldScroll = true;
    currentIndex = (index + lessons.length) % lessons.length;
    const lesson = lessons[currentIndex];
    doc.title = 'واحة الفيزياء | ' + lesson.title;
    setText('[data-lesson-title]', lesson.title);
    setText('[data-lesson-summary]', lesson.summary);
    setText('[data-goals-heading]', 'أهداف درس ' + lesson.title);
    setText('[data-concept-heading]', 'الفكرة الأساسية: ' + lesson.title);
    setText('[data-concept-text]', lesson.concept);
    setText('[data-equations-heading]', 'العلاقات والمفاتيح');
    setText('[data-activity-heading]', lesson.id === 'vertical-projectile' ? 'غيّري السرعة والارتفاع وشاهدي النتيجة' : 'نشاط سريع: ' + lesson.title);
    setText('[data-activity-text]', lesson.id === 'vertical-projectile' ? 'استخدمي المحاكاة المبسطة لتوقّع زمن الوصول إلى القمة، أقصى ارتفاع، والزمن الكلي حتى العودة إلى الأرض.' : 'اختاري الإجابة الصحيحة للتحقق من الفكرة الأساسية للدرس.');
    setText('[data-media-heading]', 'مصادر ' + lesson.title + ' داخل الصفحة');
    setText('[data-interactive-text]', lesson.activity.prompt);
    setText('[data-quiz-heading]', 'تقييم سريع: ' + lesson.title);
    const note = q('[data-formula-note]');
    if (note) note.textContent = 'راجعي المعطيات أولاً، ثم اختاري العلاقة المناسبة واتبعي اتجاهات الكميات.';

    lesson.facts.forEach(function (fact, i) {
      setText('[data-fact-' + (i + 1) + '-value]', fact[0]);
      setText('[data-fact-' + (i + 1) + '-label]', fact[1]);
    });

    qa('[data-lesson-tab]').forEach(function (tab) { tab.classList.toggle('is-current', tab.dataset.lessonTab === lesson.id); });

    renderCards(q('[data-goals-grid]'), lesson.goals, 'goal-card', function (goal, i) {
      const card = make('article', 'goal-card');
      card.appendChild(make('span', '', String(i + 1).padStart(2, '0')));
      card.appendChild(make('h3', '', shortTitle(goal)));
      card.appendChild(make('p', '', goal));
      return card;
    });

    renderCards(q('[data-concept-cards]'), lesson.goals.slice(0, 3), 'concept-card', function (goal) {
      const card = make('article', 'concept-card');
      card.appendChild(make('h3', '', shortTitle(goal)));
      card.appendChild(make('p', '', goal));
      return card;
    });

    renderCards(q('[data-equation-grid]'), lesson.equations, 'equation-card', function (item) {
      const card = make('article', 'equation-card');
      card.appendChild(make('span', '', item[0]));
      card.appendChild(make('code', '', item[1]));
      card.appendChild(make('p', '', item[2]));
      return card;
    });

    renderMedia(lesson);
    renderAssistant(lesson);
    renderMiniActivity(lesson);
    renderQuiz(lesson);
    if (shouldScroll) q('#home').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderMedia(lesson) {
    const grid = q('[data-media-grid]');
    empty(grid);
    if (!grid) return;
    if (!lesson.resources.length) {
      const card = make('article', 'media-card no-media');
      const content = make('div', 'media-content');
      content.appendChild(make('p', 'resource-type', 'مقدمة'));
      content.appendChild(make('h3', '', 'ابدئي من شريط الدروس'));
      content.appendChild(make('p', '', 'هذه الصفحة الرئيسية تجمع الدروس. اختاري درساً لعرض مصادره المضمنة هنا.'));
      card.appendChild(content);
      grid.appendChild(card);
      return;
    }
    lesson.resources.forEach(function (resource) {
      const card = make('article', 'media-card');
      const frame = make('div', 'media-frame');
      const iframe = make('iframe');
      iframe.title = resource[1];
      iframe.src = 'https://drive.google.com/file/d/' + resource[2] + '/preview';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      frame.appendChild(iframe);
      const content = make('div', 'media-content');
      content.appendChild(make('p', 'resource-type', resource[0]));
      content.appendChild(make('h3', '', resource[1]));
      content.appendChild(make('p', '', 'المصدر مدمج داخل الصفحة حتى تتابع الطالبة التعلم دون مغادرة التطبيق.'));
      card.appendChild(frame);
      card.appendChild(content);
      grid.appendChild(card);
    });
  }

  function renderAssistant(lesson) {
    const prompts = q('[data-assistant-prompts]');
    const answer = q('[data-assistant-answer]');
    empty(prompts);
    if (!prompts || !answer) return;
    const items = lesson.assistant.slice();
    items.push(['ما النشاط المناسب؟', 'راجعي الأهداف أولاً، ثم استخدمي المصدر المدمج، وبعده النشاط المصغر والتقييم.']);
    answer.textContent = 'اختاري سؤالًا لبدء المساعدة.';
    items.forEach(function (item) {
      const button = make('button', '', item[0]);
      button.type = 'button';
      button.addEventListener('click', function () { answer.textContent = item[1]; });
      prompts.appendChild(button);
    });
  }

  function renderMiniActivity(lesson) {
    const box = q('[data-mini-activity]');
    empty(box);
    if (!box) return;
    lesson.activity.options.forEach(function (option) {
      const button = make('button', '', option[0]);
      button.type = 'button';
      button.dataset.correct = option[1] ? 'true' : 'false';
      button.addEventListener('click', function () {
        qa('button', box).forEach(function (item) { item.classList.remove('is-correct', 'is-wrong'); });
        button.classList.add(option[1] ? 'is-correct' : 'is-wrong');
      });
      box.appendChild(button);
    });
  }

  function renderQuiz(lesson) {
    const fields = q('[data-quiz-fields]');
    const result = q('[data-quiz-result]');
    empty(fields);
    if (!fields) return;
    getQuiz(lesson).forEach(function (question, qi) {
      const fieldset = make('fieldset');
      fieldset.appendChild(make('legend', '', question[0]));
      question[1].forEach(function (answer, ai) {
        const label = make('label');
        const input = make('input');
        input.type = 'radio';
        input.name = 'q' + qi;
        input.value = String(ai);
        input.dataset.correct = answer[1] ? 'true' : 'false';
        label.appendChild(input);
        label.appendChild(doc.createTextNode(answer[0]));
        fieldset.appendChild(label);
      });
      fields.appendChild(fieldset);
    });
    if (result) {
      result.textContent = '';
      result.classList.remove('is-visible');
    }
  }

  function initShell() {
    const year = q('#year');
    if (year) year.textContent = new Date().getFullYear();
    const header = q('[data-header]');
    const nav = q('[data-nav]');
    const menuToggle = q('[data-menu-toggle]');
    const themeToggle = q('[data-theme-toggle]');
    const backToTop = q('[data-back-to-top]');
    const savedTheme = localStorage.getItem('physics-theme');
    if (savedTheme === 'dark') body.classList.add('dark');
    if (themeToggle) themeToggle.setAttribute('aria-pressed', String(body.classList.contains('dark')));

    function closeMenu() {
      if (nav) nav.classList.remove('is-open');
      if (menuToggle) {
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }

    if (themeToggle) themeToggle.addEventListener('click', function () {
      const isDark = !body.classList.contains('dark');
      body.classList.toggle('dark', isDark);
      themeToggle.setAttribute('aria-pressed', String(isDark));
      localStorage.setItem('physics-theme', isDark ? 'dark' : 'light');
    });

    if (menuToggle) menuToggle.addEventListener('click', function () {
      const isOpen = nav && nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', Boolean(isOpen));
      menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
    });

    doc.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(); });

    const scrollers = qa('a').filter(function (link) { return (link.getAttribute('href') || '').charAt(0) === '#'; }).concat(qa('[data-scroll]'));
    scrollers.forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        const targetSelector = trigger.dataset.scroll || trigger.getAttribute('href');
        const target = targetSelector ? q(targetSelector) : null;
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();
      });
    });

    window.addEventListener('scroll', function () {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 18);
      if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 560);
    }, { passive: true });

    if (backToTop) backToTop.addEventListener('click', function () { root.scrollIntoView({ behavior: 'smooth' }); });
    qa('.reveal').forEach(function (item) { item.classList.add('is-visible'); });
  }

  q('[data-lesson-tabs]').addEventListener('click', function (event) {
    const button = event.target.closest('[data-lesson-tab]');
    if (!button) return;
    const index = lessons.findIndex(function (lesson) { return lesson.id === button.dataset.lessonTab; });
    if (index >= 0) renderLesson(index);
  });

  q('[data-prev-lesson]').addEventListener('click', function () { renderLesson(currentIndex - 1); });
  q('[data-next-lesson]').addEventListener('click', function () { renderLesson(currentIndex + 1); });

  q('[data-quiz]').addEventListener('submit', function (event) {
    event.preventDefault();
    const questions = getQuiz(lessons[currentIndex]);
    let score = 0;
    questions.forEach(function (_, index) {
      const checked = q('input[name=q' + index + ']:checked');
      if (checked && checked.dataset.correct === 'true') score += 1;
    });
    const result = q('[data-quiz-result]');
    if (result) {
      result.textContent = score === questions.length ? 'إجابات ممتازة. يمكنك الانتقال إلى الدرس التالي.' : 'حصلت على ' + score + ' من ' + questions.length + '. راجعي الأهداف والمفاتيح ثم أعيدي المحاولة.';
      result.classList.add('is-visible');
    }
  });

  function updateSimulation() {
    const v0Input = q('[data-v0]');
    const y0Input = q('[data-y0]');
    if (!v0Input || !y0Input) return;
    const g = 9.8;
    const v0 = Number(v0Input.value);
    const y0 = Number(y0Input.value);
    const tPeak = v0 / g;
    const hMax = y0 + (v0 * v0) / (2 * g);
    const tTotal = (v0 + Math.sqrt(v0 * v0 + 2 * g * y0)) / g;
    const scaleHeight = Math.max(80, hMax);
    const visualPeak = Math.min(300, 38 + (hMax / scaleHeight) * 280);
    const visualBall = Math.min(286, 38 + (y0 / scaleHeight) * 280);
    setText('[data-v0-label]', v0.toFixed(0));
    setText('[data-y0-label]', y0.toFixed(0));
    setText('[data-time-peak]', tPeak.toFixed(2) + ' s');
    setText('[data-max-height]', hMax.toFixed(1) + ' m');
    setText('[data-total-time]', tTotal.toFixed(2) + ' s');
    const ball = q('[data-ball]');
    const peakLine = q('[data-peak-line]');
    if (ball) ball.style.bottom = visualBall + 'px';
    if (peakLine) peakLine.style.bottom = visualPeak + 'px';
  }

  q('[data-v0]').addEventListener('input', updateSimulation);
  q('[data-y0]').addEventListener('input', updateSimulation);
  initShell();
  updateSimulation();
  renderLesson(currentIndex, false);
})();
