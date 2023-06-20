import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

export const Images = [
  { image: require("../../assets/image/kizilay1.jpg") },
  { image: require("../../assets/news/Slider2.jpg") },
  { image: require("../../assets/news/Slider3.jpg") },
  { image: require("../../assets/news/Slider4.jpg") },
];

const PreScreening = () => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 32,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.msgContainer}>
          <ScrollView>
            <Image
              style={{ width: 350, height: 350 }}
              resizeMode="cover"
              source={require("../../assets/image/kizilay1.jpg")}
            />
            <Text>{text1}</Text>
            <Image
              style={{ width: 350, height: 350 }}
              resizeMode="cover"
              source={require("../../assets/image/kizilay2.jpg")}
            />

            <Text>{text2}</Text>
            <Image
              style={{ width: 350, height: 350 }}
              resizeMode="cover"
              source={require("../../assets/image/kizilay3.jpg")}
            />

            <Text>{text3}</Text>
            <Image
              style={{ width: 350, height: 350 }}
              resizeMode="cover"
              source={require("../../assets/image/kizilay4.jpg")}
            />

            <Text>{text4}</Text>
            <Image
              style={{ width: 350, height: 350 }}
              resizeMode="cover"
              source={require("../../assets/image/kizilay5.jpg")}
            />

            <Text>{text5}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PreScreening;

const styles = StyleSheet.create({
  msgContainer: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    //height: "80%",
  },
});

const text1 = `
1. Bilgilendirme ve form doldurma :
Kan bağışı için kan bağışı merkezlerine başvurduğunuzda size 4 sayfalık bir form verilir. Bu formun içeriğinde;
• Kan bağışçısı bilgilendirme formu
• Kan bağışçısı kayıt formu
• Kan bağışçısı sorgulama formu yer almaktadır.


Dolduracağınız sorgulama formunda kişisel bilgilerinizin yanı sıra özel hayatınızla ilgili sorular bulunmaktadır. Ankette özel soruların yer alması ve sizlerin bu sorulara samimiyetle vereceğiniz cevaplar “Güvenli Kan Temininin” ilk adımını oluşturmaktadır. Paylaştığınız tüm bilgiler hem etik hem de yasal olarak gizli tutulmaktadır. Sorular ve bilgilendirmeler ile ilgili her türlü merak ettiğiniz konuyu doktorlarımıza ya da flebotomistlerimize (hemşirelerimize) danışabilirsiniz.
`;

const text2 = `2. Kayıt
Kan bağışı işlemi yasal bir süreçtir. Bu nedenle kimlik ve iletişim bilgileriniz Türk Kızılay'ın kullanmış olduğu sisteme kaydedilmektedir. Fotoğraflı, T.C. Kimlik Numarasını içeren ve yasal olarak geçerli bir kimlik (nüfus cüzdanı, ehliyet veya pasaport) ibraz etmeniz yasa gereği zorunludur.

Kayıt işlemiyle beraber flebotmistlerimiz tarafından kan sayımı, tansiyon, nabız, ateş ve vücut ağırlığı ölçümü yapılır.`;

const text3 = `3. Doktor muayenesi
Kayıt işlemi sonrasında yapılan sınırlı fiziksel muayane sonuçları doldurduğunuz forma ve bilgisayar sistemine işlenir. Doktorlarımız doldurduğunuz form ve fiziksel muayene sonuçlarını değerlendirir. Bağışçı adayı olarak kan bağışında bulunmanız ilk olarak size daha sonrada ihtiyaç sahibine herhangi bir zarar vermeyecekse kan bağışı işlemine yönlendirilirsiniz.
`;

const text4 = `4. Kan bağışı işlemi
Kan bağışı işlemi için özel olarak tasarlanmış kan alma yataklarına alınırsınız.
  Kan bağışı işlemi;
• Konusunda eğitim almış tecrübeli flebotomistler tarafından gerçekleştirilir.
• Kullanılan tüm malzemeler tek kullanımlık ve sterildir.
• Kan alımı işlemi en uygun bölge olan dirsek çukurunda gerçekleşir.
• Kan alma işlemi yaklaşık 4-8 dk sürer.
• Her kan bağışında sadece 1 ünite kan bağışlanmaktadır. 1 ünite kan yaklaşık 450 ml ±%10 ‘dir.`;

const text5 = `5. İkram ve istirahat
İşlem sona erdiğinde size belirtilen süre kadar yatakta ve yine belirtilen süre kadar ikram alanında dinlenmeniz gerekmektedir. Kan alma yatağında istirahat ederken flebotomistlerin size gösterdiği şekilde kolunuza bası yapmanız damar dışına kanama olmaması için önemlidir.

İkram bölümünde sizlere minarel yönünden zengin olduğu için maden suyu ve bisküvi vb. verilmektedir. Verilen ikramları tüketmeniz kaybedilmiş sıvının yerine konulmasına katkı sağlayacaktır .


6. Dikkat edilmesi gerekenler
Gerçekleşen kan bağışı günlük hayatınızı etkilemeyecek miktardadır. (vücuttaki kanın 1/13’ü )
 
  Yine de dikkat edilecek bazı konular vardır:
• Sigara baş dönmesi ya da mide bulantısı gibi şikâyetlere yol açabileceği için bağış sonrası en az iki saat içinde içilmemesi gerekmektedir.
• Gün içerisinde kan bağışında bulunduğunuz kolunuz ile ağırlık kaldırmamanız kapanan damar duvarındaki pıhtının açılmaması için önemlidir.
• İlk 4 saat boyunca olduğundan fazla sıvı tüketmeye çalışınız. İkinci öğünden önce alkollü içecekler almayınız. (alkol vücuttan sıvı atılımını artırdığı için şikayete yol açabilir.)
• Sportif faaliyetlerinize bir gün ara veriniz.
• Gün içerisinde sıvı kaybını artırdığı için aşırı sıcak ortamlarda (hamam, sauna vb.) bulunmayınız.
• Pilot, ticari araç şoförleri, tehlikeli makine operatörleri, yüksek yerlerde bedeni faaliyet gösteren meslek grupları vb.in kan bağışladıktan sonra 24 saat işlerine ara vermeleri önerilir.
• Tüm bu önerilere rağmen baygınlık hissi ya da baş dönemsi olursa bir yere uzanın veya başınızı iki dizinizin arasına alacak şekilde oturunuz.`;
